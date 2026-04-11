(function() {
  const ordersData = [
    {
      id: "ORD-1001",
      vendorName: "Matsuya (Tsim Sha Tsui)",
      vendorAddress: "Shop G06-09, G/F, Chuang's London Plaza, 219 Nathan Road, Jordan Hong Kong",
      pickupType: "Standard 10 mins",
      scheduledDateTime: null,
      orderDate: "2025-03-15T13:45:00",
      status: "completed",
      items: [
        { name: "Grilled Salmon", price: 30.4, quantity: 2 },
        { name: "Lee Kum Kee J x Scaldling Lettuce", price: 16, quantity: 1 },
        { name: "Gyumeshi + M", price: 36, quantity: 1 }
      ],
      extraItems: [],
      email: "alex.wong@example.com",
      customerName: "Alex Wong"
    },
    {
      id: "ORD-1002",
      vendorName: "Matsuya (Tsim Sha Tsui)",
      vendorAddress: "Shop G06-09, G/F, Chuang's London Plaza, 219 Nathan Road, Jordan Hong Kong",
      pickupType: "Scheduled pick-up",
      scheduledDateTime: "2025-03-20T18:30:00",
      orderDate: "2025-03-19T09:15:00",
      status: "preparing",
      items: [
        { name: "Grilled Salmon", price: 30.4, quantity: 1 },
        { name: "Gyumeshi + M", price: 36, quantity: 2 }
      ],
      extraItems: [
        { name: "Extra Edamame", price: 18.0, quantity: 1 }
      ],
      email: "jessie.li@example.com",
      customerName: "Jessie Li"
    },
    {
      id: "ORD-1003",
      vendorName: "Matsuya (Tsim Sha Tsui)",
      vendorAddress: "Shop G06-09, G/F, Chuang's London Plaza, 219 Nathan Road, Jordan Hong Kong",
      pickupType: "Standard 10 mins",
      scheduledDateTime: null,
      orderDate: "2025-03-22T11:20:00",
      status: "ready",
      items: [
        { name: "Lee Kum Kee J x Scaldling Lettuce", price: 16, quantity: 2 },
        { name: "Grilled Salmon", price: 30.4, quantity: 1 }
      ],
      extraItems: [],
      email: "michael.chan@example.com",
      customerName: "Michael Chan"
    },
    {
      id: "ORD-1004",
      vendorName: "Matsuya (Tsim Sha Tsui)",
      vendorAddress: "Shop G06-09, G/F, Chuang's London Plaza, 219 Nathan Road, Jordan Hong Kong",
      pickupType: "Scheduled pick-up",
      scheduledDateTime: "2025-03-25T19:15:00",
      orderDate: "2025-03-24T16:45:00",
      status: "completed",
      items: [
        { name: "Grilled Salmon", price: 30.4, quantity: 1 },
        { name: "Gyumeshi + M", price: 36, quantity: 1 },
        { name: "Lee Kum Kee J x Scaldling Lettuce", price: 16, quantity: 1 }
      ],
      extraItems: [
        { name: "Extra Kimchi", price: 12.0, quantity: 1 }
      ],
      email: "sarah.t@example.com",
      customerName: "Sarah Tse"
    },
    {
      id: "ORD-1005",
      vendorName: "Matsuya (Tsim Sha Tsui)",
      vendorAddress: "Shop G06-09, G/F, Chuang's London Plaza, 219 Nathan Road, Jordan Hong Kong",
      pickupType: "Standard 10 mins",
      scheduledDateTime: null,
      orderDate: "2025-03-26T14:30:00",
      status: "preparing",
      items: [
        { name: "Grilled Salmon", price: 30.4, quantity: 2 },
        { name: "Gyumeshi + M", price: 36, quantity: 1 }
      ],
      extraItems: [
        { name: "Extra Edamame", price: 18.0, quantity: 2 },
        { name: "Miso Soup", price: 8.0, quantity: 1 }
      ],
      email: "david.lam@example.com",
      customerName: "David Lam"
    }
  ];

  // Constants for fee structure (matching checkout)
  const SERVICE_FEE = 2.6;
  
  let currentFilter = 'all';

  

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
  
 
   // Get order total including service fee
  
  function getOrderTotal(items, extraItems) {
    return calculateSubtotal(items, extraItems) + SERVICE_FEE;
  }
  
  
   //Format order date for display
  
  function formatOrderDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-HK', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  
   //Format pickup date/time display
  
  function formatPickupDateTime(order) {
    if (order.pickupType === "Scheduled pick-up" && order.scheduledDateTime) {
      const scheduledDate = new Date(order.scheduledDateTime);
      return scheduledDate.toLocaleString('en-HK', { dateStyle: 'medium', timeStyle: 'short' });
    }
    return "Standard (ready in ~10 mins)";
  }
  
 
  //Get status badge HTML
  
  function getStatusBadge(status) {
    switch(status) {
      case 'completed':
        return '<span class="order-status status-completed"> Completed</span>';
      case 'preparing':
        return '<span class="order-status status-preparing"> Preparing</span>';
      case 'ready':
        return '<span class="order-status status-ready"><i class="bi bi-bag-check me-1"></i> Ready for pick-up</span>';
      default:
        return '<span class="order-status">Unknown</span>';
    }
  }
  
  
   // Escape HTML special characters
  
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }
  
  
   // Show temporary feedback message
  
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
    setTimeout(() => feedback.remove(), 2500);
  }
  
  
   //Build items HTML for an order
   
  function buildItemsHtml(items, extraItems) {
    let itemsHtml = '';
    const allItems = [];
    
    items.forEach(i => {
      allItems.push({ name: i.name, price: i.price, quantity: i.quantity || 1, isExtra: false });
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
          </div>
          <div class="item-price-history">HK$ ${itemTotal.toFixed(1)}</div>
        </div>
      `;
    });
    
    return itemsHtml;
  }
  

  function getFilterDisplayName(filterValue) {
    const filterMap = {
      'all': 'All orders',
      'completed': 'Completed',
      'preparing': 'Preparing',
      'ready': 'Ready for pick-up'
    };
    return filterMap[filterValue] || filterValue;
  }
  
  /**
   * Render orders based on current filter
   */
  function renderOrders() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;
    
    let filteredOrders = ordersData;
    if (currentFilter !== 'all') {
      filteredOrders = ordersData.filter(order => order.status === currentFilter);
    }
    
    if (filteredOrders.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-inbox"></i>
          <h5 class="mt-3">No orders found</h5>
          <p class="text-muted">No ${getFilterDisplayName(currentFilter).toLowerCase()} orders in your history.</p>
          <button class="btn-reorder" id="clearFilterBtn">
            <i class="bi bi-funnel"></i> Show all orders
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
      return;
    }
    
    // Generate cards following the design pattern
    let cardsHtml = '';
    filteredOrders.forEach(order => {
      const subtotal = calculateSubtotal(order.items, order.extraItems);
      const totalPaid = getOrderTotal(order.items, order.extraItems);
      const pickupDisplay = formatPickupDateTime(order);
      const orderDateFormatted = formatOrderDate(order.orderDate);
      const itemsHtml = buildItemsHtml(order.items, order.extraItems);
      const statusBadge = getStatusBadge(order.status);
      
      cardsHtml += `
        <div class="card order-card" data-order-id="${order.id}">
          <div class="card-content">
            <div class="d-flex justify-content-between align-items-start flex-wrap">
              <div>
                <div class="section-label">ORDER #${escapeHtml(order.id)} • ${orderDateFormatted}</div>
                <div class="vendor-name-large">${escapeHtml(order.vendorName)}</div>
                <div class="vendor-address">${escapeHtml(order.vendorAddress)}</div>
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
              <span class="total-label">Platform fee</span>
              <span class="fee-breakdown">HK$ ${SERVICE_FEE.toFixed(1)}</span>
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
            
          </div>
        </div>
      `;
    });
    
    container.innerHTML = cardsHtml;
    

  }
  
  /**
   * Setup filter select dropdown
   */
  function setupFilterSelect() {
    const filterSelect = document.getElementById('orderFilterSelect');
    if (!filterSelect) return;
    
    filterSelect.addEventListener('change', (e) => {
      const newFilter = e.target.value;
      currentFilter = newFilter;
      renderOrders();
      
      // Show feedback with animation
      const filterDisplayName = getFilterDisplayName(newFilter);
      showTemporaryFeedback(`Filtered: ${filterDisplayName}`, 'success');
      
      // Add a subtle highlight effect to the select
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