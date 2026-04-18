(function() {
  // Constants for fee structure (matching checkout)
  const SERVICE_FEE = 2.6;
  
  let currentFilter = 'all';
  let ordersData = [];

  /**
   * Load orders from localStorage only
   * Returns true if orders exist, false otherwise
   */
  function loadOrdersFromStorage() {
    const storedOrders = localStorage.getItem("OrderHistory");
    if (storedOrders) {
      try {
        ordersData = JSON.parse(storedOrders);
        return ordersData.length > 0;
      } catch (error) {
        console.error("Error parsing orders:", error);
        ordersData = [];
        return false;
      }
    }
    return false;
  }

  /**
   * Save orders to localStorage
   */
  function saveOrdersToStorage() {
    localStorage.setItem("OrderHistory", JSON.stringify(ordersData));
  }

  /**
   * Calculate subtotal for an order
   */
  function calculateSubtotal(items, extraItems) {
    let sum = 0;
    for (let it of items) {
      sum += it.price * (it.quantity || 1);
    }
    for (let ex of extraItems) {
      sum += ex.price * (ex.quantity || 1);
    }
    return sum;
  }
  
  /**
   * Get order total including service fee
   */
  function getOrderTotal(items, extraItems) {
    return calculateSubtotal(items, extraItems) + SERVICE_FEE;
  }
  
  /**
   * Format order date for display
   */
  function formatOrderDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-HK', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  
  /**
   * Format pickup date/time display
   */
  function formatPickupDateTime(order) {
    if (order.pickupType === "Scheduled pick-up" && order.scheduledDateTime) {
      const scheduledDate = new Date(order.scheduledDateTime);
      return scheduledDate.toLocaleString('en-HK', { dateStyle: 'medium', timeStyle: 'short' });
    }
    return "Standard (ready in ~10 mins)";
  }
  
  /**
   * Get status badge HTML
   */
  function getStatusBadge(status) {
    switch(status) {
      case 'completed':
        return '<span class="order-status status-completed">✓ Completed</span>';
      case 'preparing':
        return '<span class="order-status status-preparing">⏳ Preparing</span>';
      case 'ready':
        return '<span class="order-status status-ready"><i class="bi bi-bag-check me-1"></i> Ready for pick-up</span>';
      case 'cancelled':
        return '<span class="order-status status-cancelled" style="background: #f8d7da; color: #721c24;">✗ Cancelled</span>';
      default:
        return '<span class="order-status">Unknown</span>';
    }
  }
  
  /**
   * Escape HTML special characters
   */
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }
  
  /**
   * Show temporary feedback message
   */
  function showTemporaryFeedback(message, type = 'success') {
    const feedback = document.createElement('div');
    feedback.className = `small mt-2 ${type === 'success' ? 'text-success' : 'text-danger'}`;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '20px';
    feedback.style.right = '20px';
    feedback.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    feedback.style.color = type === 'success' ? '#155724' : '#721c24';
    feedback.style.padding = '12px 20px';
    feedback.style.borderRadius = '40px';
    feedback.style.fontWeight = '500';
    feedback.style.fontSize = '0.85rem';
    feedback.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    feedback.style.zIndex = '9999';
    feedback.innerHTML = `<i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2"></i>${message}`;
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 3000);
  }
  
  /**
   * Build items HTML for an order
   */
  function buildItemsHtml(items, extraItems) {
    let itemsHtml = '';
    const allItems = [];
    
    items.forEach(i => {
      const displayName = i.detail ? `${i.name} (${i.detail})` : i.name;
      allItems.push({ 
        name: displayName, 
        price: i.price, 
        quantity: i.quantity || 1, 
        isExtra: false,
        instruction: i.instruction
      });
    });
    extraItems.forEach(e => {
      allItems.push({ name: e.name, price: e.price, quantity: e.quantity || 1, isExtra: true });
    });
    
    allItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      itemsHtml += `
        <div class="history-item-row">
          <div class="item-name-history">
            ${item.quantity} × ${escapeHtml(item.name)}
            ${item.isExtra ? '<span class="badge bg-light text-dark ms-1" style="font-size: 0.6rem;">+ added</span>' : ''}
            ${item.instruction ? `<br><small class="text-muted">Note: ${escapeHtml(item.instruction)}</small>` : ''}
          </div>
          <div class="item-price-history">HK$ ${itemTotal.toFixed(1)}</div>
        </div>
      `;
    });
    
    return itemsHtml;
  }
  
  /**
   * Get filter display name
   */
  function getFilterDisplayName(filterValue) {
    const filterMap = {
      'all': 'All orders',
      'completed': 'Completed',
      'preparing': 'Preparing',
      'ready': 'Ready for pick-up',
      'cancelled': 'Cancelled'
    };
    return filterMap[filterValue] || filterValue;
  }
  
  /**
   * Cancel an order
   */
  function cancelOrder(orderId) {
    const orderIndex = ordersData.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
      showTemporaryFeedback('Order not found', 'danger');
      return;
    }
    
    const order = ordersData[orderIndex];
    
    // Check if order can be cancelled (only preparing orders can be cancelled)
    if (order.status === 'completed') {
      showTemporaryFeedback('Cannot cancel a completed order', 'danger');
      return;
    }
    
    if (order.status === 'cancelled') {
      showTemporaryFeedback('Order is already cancelled', 'danger');
      return;
    }
    
    if (order.status === 'ready') {
      showTemporaryFeedback('Order is ready for pick-up. Please contact restaurant for cancellation.', 'danger');
      return;
    }
    
    // Confirm cancellation
    const confirmCancel = confirm(`Are you sure you want to cancel order ${order.id}?\n\nThis action cannot be undone.`);
    
    if (confirmCancel) {
      // Update order status
      ordersData[orderIndex].status = 'cancelled';
      
      // Save to localStorage
      saveOrdersToStorage();
      
      // Re-render orders
      renderOrders();
      
      showTemporaryFeedback(`Order ${order.id} has been cancelled successfully`, 'success');
    }
  }
  
  /**
   * Reorder an existing order (add items back to cart in sessionStorage)
   */
  function reorderOrder(order) {
    // Check if order is cancelled - cannot reorder cancelled orders
    if (order.status === 'cancelled') {
      showTemporaryFeedback('Cannot reorder a cancelled order. Please add items manually.', 'danger');
      return;
    }
    
    try {
      // Create cart structure matching CartItem.js format
      const cartItems = [];
      order.items.forEach(item => {
        cartItems.push({
          id: Date.now() + Math.random(),
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
          picture: item.picture || null,
          selectedVariants: [],
          SelectedToppings: [],
          detail: item.detail || '',
          instruction: item.instruction || ''
        });
      });
      
      // Calculate totals
      const subtotal = order.subtotal || calculateSubtotal(order.items, order.extraItems);
      const standardDelivery = 3.0;
      const platformFee = 1.0;
      const total = subtotal + standardDelivery + platformFee;
      
      // Create cart object matching CartItem structure
      const cart = {
        cartId: Date.now(),
        vendorId: 1,
        items: cartItems,
        subTotal: subtotal,
        standardDelivery: standardDelivery,
        platformFee: platformFee,
        total: total
      };
      
      // Get existing cart from sessionStorage (same as CartItemModel)
      let existingCart = [];
      const storedCart = sessionStorage.getItem("CartData");
      if (storedCart) {
        existingCart = JSON.parse(storedCart);
      }
      
      // Check if vendor already has a cart
      const existingVendorCartIndex = existingCart.findIndex(c => c.vendorId == cart.vendorId);
      if (existingVendorCartIndex >= 0) {
        // Merge items into existing cart
        cart.items.forEach(newItem => {
          const existingItem = existingCart[existingVendorCartIndex].items.find(
            i => i.id === newItem.id && i.detail === newItem.detail
          );
          if (existingItem) {
            existingItem.quantity += newItem.quantity;
            existingItem.totalPrice += newItem.totalPrice;
          } else {
            existingCart[existingVendorCartIndex].items.push(newItem);
          }
        });
        // Recalculate totals
        let newSubtotal = 0;
        existingCart[existingVendorCartIndex].items.forEach(item => {
          newSubtotal += item.totalPrice;
        });
        existingCart[existingVendorCartIndex].subTotal = newSubtotal;
        existingCart[existingVendorCartIndex].total = newSubtotal + standardDelivery + platformFee;
      } else {
        existingCart.push(cart);
      }
      
      // Save back to sessionStorage
      sessionStorage.setItem("CartData", JSON.stringify(existingCart));
      
      showTemporaryFeedback('Items added to cart! Redirecting to delivery page...', 'success');
      
      // Redirect to delivery page after 1.5 seconds
      setTimeout(() => {
        window.location.href = 'delivery.html';
      }, 1500);
    } catch (error) {
      console.error("Error reordering:", error);
      showTemporaryFeedback('Error adding items to cart. Please try again.', 'danger');
    }
  }
  
  /**
   * Render empty state when no orders exist
   */
  function renderEmptyState() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;
    
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
        <i class="bi bi-receipt" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem; display: inline-block;"></i>
        <h4 class="mt-3" style="color: #1e1e2a;">No orders yet</h4>
        <p class="text-muted" style="max-width: 400px; margin: 0.5rem auto;">
          You haven't placed any orders yet. Start exploring restaurants and place your first order!
        </p>
        <button class="btn-reorder" id="startOrderingBtn" style="margin-top: 1.5rem; background: #f272b2; padding: 0.75rem 2rem;">
          <i class="bi bi-shop"></i> Browse Restaurants
        </button>
      </div>
    `;
    
    const startBtn = document.getElementById('startOrderingBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        window.location.href = 'delivery.html';
      });
    }
  }
  
  /**
   * Render orders based on current filter
   */
  function renderOrders() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;
    
    // Load orders from localStorage only - NO SAMPLE DATA
    const hasOrders = loadOrdersFromStorage();
    
    // If no orders exist, show empty state
    if (!hasOrders || ordersData.length === 0) {
      renderEmptyState();
      return;
    }
    
    let filteredOrders = ordersData;
    if (currentFilter !== 'all') {
      filteredOrders = ordersData.filter(order => order.status === currentFilter);
    }
    
    if (filteredOrders.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 3rem 2rem;">
          <i class="bi bi-funnel" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem; display: inline-block;"></i>
          <h5 class="mt-3">No ${getFilterDisplayName(currentFilter).toLowerCase()} orders found</h5>
          <p class="text-muted">Try changing your filter to see more orders.</p>
          <button class="btn-reorder" id="clearFilterBtn">
            <i class="bi bi-funnel"></i> Show all orders
          </button>
          <button class="btn-reorder ms-2" id="browseRestaurantsBtn" style="background: #f272b2;">
            <i class="bi bi-shop"></i> Browse Restaurants
          </button>
        </div>
      `;
      const clearBtn = document.getElementById('clearFilterBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          const filterSelect = document.getElementById('orderFilterSelect');
          if (filterSelect) {
            filterSelect.value = 'all';
            currentFilter = 'all';
            renderOrders();
            showTemporaryFeedback('Showing: All orders', 'success');
          }
        });
      }
      const browseBtn = document.getElementById('browseRestaurantsBtn');
      if (browseBtn) {
        browseBtn.addEventListener('click', () => {
          window.location.href = 'delivery.html';
        });
      }
      return;
    }
    
    // Generate cards for existing orders
    let cardsHtml = '';
    filteredOrders.forEach(order => {
      const subtotal = order.subtotal || calculateSubtotal(order.items, order.extraItems);
      const totalPaid = order.totalAmount || getOrderTotal(order.items, order.extraItems);
      const pickupDisplay = formatPickupDateTime(order);
      const orderDateFormatted = formatOrderDate(order.orderDate);
      const itemsHtml = buildItemsHtml(order.items, order.extraItems || []);
      const statusBadge = getStatusBadge(order.status);
      
      // Use the actual vendor name stored in the order
      const vendorName = order.vendorName || "Restaurant";
      
      // Show cancel button only for orders that are not completed or cancelled
      const showCancelButton = (order.status === 'preparing');
      
      cardsHtml += `
        <div class="card order-card" data-order-id="${order.id}">
          <div class="card-content">
            <div class="d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <div class="section-label">ORDER #${escapeHtml(order.id)} • ${orderDateFormatted}</div>
                <div class="vendor-name-large">${escapeHtml(vendorName)}</div>
                <div class="vendor-address">${escapeHtml(order.vendorAddress || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}</div>
              </div>
              <div class="mt-1 mt-sm-0">
                ${statusBadge}
              </div>
            </div>
            
            <!-- Pickup info row -->
            <div class="info-row mt-2" style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
              <span class="fee-breakdown" style="font-size:0.75rem;"><i class="bi bi-geo-alt-fill"></i> Pick-up:</span>
              <span class="fee-breakdown" style="font-weight:500;">${escapeHtml(order.pickupType)} ${order.pickupType === 'Scheduled pick-up' ? '· ' + pickupDisplay : pickupDisplay}</span>
            </div>
            
            <!-- Delivery approach -->
            <div class="info-row" style="margin-bottom: 0.25rem;">
              <span class="fee-breakdown" style="font-size:0.75rem;"><i class="bi bi-truck"></i> Type:</span>
              <span class="fee-breakdown" style="font-weight:500;">${order.deliveryApproach === 'delivery' ? 'Delivery' : 'Pickup'}</span>
            </div>
            
            <!-- Order items list -->
            <div class="history-items mt-2">
              ${itemsHtml}
            </div>
            
            <!-- Total and fee breakdown -->
            <div class="order-summary-row">
              <span class="total-label">Subtotal</span>
              <span class="fee-breakdown">HK$ ${subtotal.toFixed(1)}</span>
            </div>
            <div class="order-summary-row" style="border-top: none; padding-top:0;">
              <span class="total-label">Service fee</span>
              <span class="fee-breakdown">HK$ ${(order.serviceFee || SERVICE_FEE).toFixed(1)}</span>
            </div>
            <div class="order-summary-row" style="margin-top: 0.25rem;">
              <span class="total-label total-main" style="font-weight:800;">Total paid</span>
              <span class="total-amount">HK$ ${totalPaid.toFixed(1)}</span>
            </div>
            
            <!-- Customer info -->
            <div class="order-meta d-flex justify-content-between align-items-center mt-2">
              <div><i class="bi bi-envelope"></i> ${escapeHtml(order.email)}</div>
              <div><i class="bi bi-person"></i> ${escapeHtml(order.customerName)}</div>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-3 d-flex gap-2" style="display: flex; gap: 10px;">
              <button class="btn-reorder reorder-btn" data-order-id="${order.id}" style="flex: 1;">
                <i class="bi bi-arrow-repeat"></i> Order Again
              </button>
              ${showCancelButton ? `
              <button class="btn-reorder cancel-btn" data-order-id="${order.id}" style="flex: 1; background: #dc3545; border-color: #dc3545;">
                <i class="bi bi-x-circle"></i> Cancel Order
              </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });
    
    container.innerHTML = cardsHtml;
    
    // Attach reorder event listeners
    document.querySelectorAll('.reorder-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const orderId = btn.getAttribute('data-order-id');
        const order = ordersData.find(o => o.id === orderId);
        if (order) {
          reorderOrder(order);
        }
      });
    });
    
    // Attach cancel event listeners
    document.querySelectorAll('.cancel-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const orderId = btn.getAttribute('data-order-id');
        cancelOrder(orderId);
      });
    });
  }
  
  /**
   * Setup filter select dropdown
   */
  function setupFilterSelect() {
    const filterSelect = document.getElementById('orderFilterSelect');
    if (!filterSelect) return;
    
    // Add cancelled option to select if not present
    if (!filterSelect.querySelector('option[value="cancelled"]')) {
      const cancelledOption = document.createElement('option');
      cancelledOption.value = 'cancelled';
      cancelledOption.textContent = 'Cancelled';
      filterSelect.appendChild(cancelledOption);
    }
    
    filterSelect.addEventListener('change', (e) => {
      const newFilter = e.target.value;
      currentFilter = newFilter;
      renderOrders();
      
      const filterDisplayName = getFilterDisplayName(newFilter);
      showTemporaryFeedback(`Filtered: ${filterDisplayName}`, 'success');
      
      filterSelect.style.transform = 'scale(1.02)';
      setTimeout(() => {
        filterSelect.style.transform = '';
      }, 200);
    });
  }
  
  /**
   * Initialize order history page
   */
  function initOrderHistory() {
    setupFilterSelect();
    renderOrders();
  }
  
  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOrderHistory);
  } else {
    initOrderHistory();
  }
})();