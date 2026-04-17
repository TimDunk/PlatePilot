(function() {

  const scheduledTrigger = document.getElementById('scheduledTrigger');
  const dateTimePickerContainer = document.getElementById('dateTimePickerContainer');
  const selectedDateTimeDisplay = document.getElementById('selectedDateTimeDisplay');
  const addMoreItemsBtn = document.getElementById('addMoreItemsBtn');
  const placeOrderBtn = document.getElementById('placePickupOrderBtn');
  const originalPriceSpan = document.getElementById('originalPriceSpan');
  const savedAmountSpan = document.getElementById('savedAmountBadge');
  const orderItemsTableBody = document.getElementById('orderItemsTableBody');
  const fullNameInput = document.getElementById('fullNameInput');
  const addressInput = document.getElementById('addressInput');
  const emailInput = document.getElementById('emailInput');
  

  const subtotalDisplay = document.getElementById('subtotalValue');
  const platformFeeDisplay = document.getElementById('platformFeeValue');
  const gstDisplay = document.getElementById('gstValue');
  const finalTotalDisplay = document.getElementById('finalTotalValue');
  const vendorNameDisplay = document.getElementById('vendorName');
  const vendorAddressDisplay = document.getElementById('vendorAddress');
  const orderVendorNameDisplay = document.getElementById('orderVendorName');


  let cartData = null;
  let currentVendor = null;
  let currentApproach = 'delivery';
  

  const SERVICE_FEE = 2.6;
  const GST_RATE = 0.05; // 5% GST
  const PROMO_DISCOUNT = 20.6;
  

  let scheduledDate = null;
  let selectedPickupType = 'standard';


  function loadCartData() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const vendorId = urlParams.get('vendorId');
      currentApproach = urlParams.get('approach') || 'delivery';


      let storedString = sessionStorage.getItem("CartData");
      const parsedArray = storedString ? JSON.parse(storedString) : [];
      
      if (vendorId && parsedArray.length > 0) {
        cartData = parsedArray.find(cart => cart.vendorId == vendorId);
      }
      
      if (!cartData || !cartData.items || cartData.items.length === 0) {
        showEmptyCartMessage();
        return false;
      }
      
      // Load vendor data from allVendorsData (defined in VendorData.js)
      if (typeof allVendorsData !== 'undefined') {
        const vendors = JSON.parse(allVendorsData);
        currentVendor = vendors.find(v => v.id == cartData.vendorId);
      }
      
      return true;
    } catch (error) {
      console.error("Error loading cart data:", error);
      return false;
    }
  }


  function showEmptyCartMessage() {
    if (orderItemsTableBody) {
      orderItemsTableBody.innerHTML = `
        <tr>
          <td colspan="2" class="text-center text-muted py-4">
            Your cart is empty. Please add items before checkout.
           </td>
         </tr>
      `;
    }
    if (placeOrderBtn) {
      placeOrderBtn.disabled = true;
      placeOrderBtn.style.opacity = '0.5';
      placeOrderBtn.style.cursor = 'not-allowed';
    }
    updateTotalsUI();
  }


  function updateVendorInfo() {
    let vendorName = "Restaurant";
    let vendorAddress = "Address not available";
    
    if (currentVendor) {
      vendorName = currentVendor.name;
      if (currentVendor.address) {
        vendorAddress = `${currentVendor.address.detailAddress}, ${currentVendor.address.city}, ${currentVendor.address.country}`;
      }
    }
    
    // Update all vendor name displays
    if (vendorNameDisplay) vendorNameDisplay.innerText = vendorName;
    if (orderVendorNameDisplay) orderVendorNameDisplay.innerText = vendorName;
    if (vendorAddressDisplay) vendorAddressDisplay.innerText = vendorAddress;
  }


  function calculateSubtotal() {
    if (!cartData || !cartData.items || cartData.items.length === 0) return 0;
    
    let subtotal = 0;
    cartData.items.forEach(item => {
      subtotal += item.totalPrice;
    });
    return subtotal;
  }


  function calculateGST() {
    const subtotal = calculateSubtotal();
    return subtotal * GST_RATE;
  }


  function getPlatformFee() {
    return SERVICE_FEE;
  }


  function getTotalWithFees() {
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const platformFee = getPlatformFee();
    return subtotal + gst + platformFee;
  }


  function getOriginalCrossPrice() {
    return getTotalWithFees() + PROMO_DISCOUNT;
  }


  function getSavedAmount() {
    return getOriginalCrossPrice() - getTotalWithFees();
  }


  function updateTotalsUI() {
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const platformFee = getPlatformFee();
    const finalVal = getTotalWithFees();
    const originalCross = getOriginalCrossPrice();
    const saved = getSavedAmount();
    
    if (subtotalDisplay) {
      subtotalDisplay.innerText = `HK$ ${subtotal.toFixed(1)}`;
    }
    
    if (platformFeeDisplay) {
      platformFeeDisplay.innerText = `HK$ ${platformFee.toFixed(1)}`;
    }
    
    if (gstDisplay) {
      gstDisplay.innerText = `HK$ ${gst.toFixed(1)}`;
    }
    
    if (finalTotalDisplay) {
      finalTotalDisplay.innerText = `HK$ ${finalVal.toFixed(1)}`;
    }
    
    if (originalPriceSpan) {
      originalPriceSpan.innerText = `HK$ ${originalCross.toFixed(1)}`;
    }
    
    if (savedAmountSpan && saved > 0.01) {
      savedAmountSpan.innerHTML = `(You save HK$ ${saved.toFixed(1)})`;
      savedAmountSpan.style.color = "#2e7d64";
      savedAmountSpan.style.fontSize = "0.7rem";
    } else if (savedAmountSpan) {
      savedAmountSpan.innerHTML = "";
    }
  }


  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }


  function rebuildOrderTable() {
    if (!orderItemsTableBody) return;
    if (!cartData || !cartData.items || cartData.items.length === 0) {
      orderItemsTableBody.innerHTML = `
        <tr>
          <td colspan="2" class="text-center text-muted py-4">
            No items in cart
           </td>
         </tr>
      `;
      return;
    }
    
    let html = '';
    
    cartData.items.forEach(item => {
      const itemTotal = item.totalPrice;
      const displayName = item.detail ? `${item.name} (${item.detail})` : item.name;
      
      html += `
        <tr>
          <td class="item-info">
            <span>${item.quantity}</span>
            <span>x</span>
            <span>${escapeHtml(displayName)}</span>
            ${item.instruction ? `<br><small class="text-muted" style="font-size: 0.7rem;">Note: ${escapeHtml(item.instruction)}</small>` : ''}
           </td>
          <td class="item-price">HK$ ${itemTotal.toFixed(1)}</td>
        </tr>
      `;
    });
    
    orderItemsTableBody.innerHTML = html;
  }


  function saveOrderToHistory(email, fullName, address, pickupType, scheduledDateTime) {
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const platformFee = getPlatformFee();
    const totalAmount = getTotalWithFees();
    
    const vendorName = currentVendor ? currentVendor.name : "Restaurant";
    const vendorAddress = currentVendor && currentVendor.address 
      ? `${currentVendor.address.detailAddress}, ${currentVendor.address.city}, ${currentVendor.address.country}`
      : "Address not available";

    const order = {
      id: `ORD-${Date.now()}`,
      vendorName: vendorName,
      vendorAddress: vendorAddress,
      pickupType: pickupType,
      scheduledDateTime: scheduledDateTime,
      orderDate: new Date().toISOString(),
      status: "preparing",
      items: cartData.items.map(item => ({
        name: item.name,
        price: item.totalPrice / item.quantity,
        quantity: item.quantity,
        detail: item.detail || '',
        instruction: item.instruction || ''
      })),
      extraItems: [],
      email: email,
      customerName: fullName,
      customerAddress: address,
      deliveryApproach: currentApproach,
      totalAmount: totalAmount,
      subtotal: subtotal,
      gst: gst,
      serviceFee: platformFee
    };
    
    let orders = [];
    const storedOrders = localStorage.getItem("OrderHistory");
    if (storedOrders) {
      try {
        orders = JSON.parse(storedOrders);
      } catch (e) {
        orders = [];
      }
    }
    
    orders.unshift(order);
    localStorage.setItem("OrderHistory", JSON.stringify(orders));
    
    return order;
  }


  function clearCart() {
    try {
      let storedString = sessionStorage.getItem("CartData");
      if (storedString) {
        let cartArray = JSON.parse(storedString);
        cartArray = cartArray.filter(cart => cart.vendorId != cartData.vendorId);
        sessionStorage.setItem("CartData", JSON.stringify(cartArray));
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }


  function initScheduledPicker() {
    if (!scheduledTrigger) return;
    
    const standardRadio = document.querySelector('input[name="pickupType"][value="standard"]');
    if (standardRadio) {
      standardRadio.addEventListener('change', () => {
        if (standardRadio.checked) {
          selectedPickupType = 'standard';
          scheduledDate = null;
          if (selectedDateTimeDisplay) selectedDateTimeDisplay.innerText = '';
          if (dateTimePickerContainer) dateTimePickerContainer.style.display = 'none';
        }
      });
    }
    
    const scheduledRadio = document.querySelector('input[name="pickupType"][value="scheduled"]');
    if (scheduledRadio) {
      scheduledRadio.addEventListener('change', () => {
        if (scheduledRadio.checked) {
          selectedPickupType = 'scheduled';
        }
      });
    }
    
    scheduledTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (scheduledRadio) {
        scheduledRadio.checked = true;
        selectedPickupType = 'scheduled';
      }
      
      if (dateTimePickerContainer.style.display === 'none') {
        if (!document.getElementById('dynamicDateTimePicker')) {
          const pickerWrapper = document.createElement('div');
          pickerWrapper.className = 'p-3 bg-light rounded-3 mt-2';
          pickerWrapper.style.border = '1px solid #f0eef2';
          pickerWrapper.style.width = '100%';
          pickerWrapper.innerHTML = `
            <label class="small fw-semibold mb-1">Select date & time for pick-up:</label>
            <input type="datetime-local" id="dynamicDateTimePicker" class="form-control form-control-sm mt-1">
            <div class="d-flex gap-2 mt-3">
              <button id="confirmScheduleBtn" class="btn btn-sm rounded-pill" style="background:#f272b2; border:none; color:white;">Confirm</button>
              <button id="cancelScheduleBtn" class="btn btn-sm btn-outline-secondary rounded-pill">Cancel</button>
            </div>
          `;
          dateTimePickerContainer.appendChild(pickerWrapper);
          
          const confirmBtn = document.getElementById('confirmScheduleBtn');
          const cancelBtn = document.getElementById('cancelScheduleBtn');
          const dateInput = document.getElementById('dynamicDateTimePicker');
          
          confirmBtn.addEventListener('click', () => {
            const val = dateInput.value;
            if (val) {
              const formatted = new Date(val).toLocaleString('en-HK', { 
                hour12: true, 
                dateStyle: 'medium', 
                timeStyle: 'short' 
              });
              if (selectedDateTimeDisplay) selectedDateTimeDisplay.innerText = formatted;
              scheduledDate = val;
              dateTimePickerContainer.style.display = 'none';
              showTemporaryFeedback(`Pick-up scheduled for ${formatted}`, 'success');
            } else {
              alert('Please select a valid date and time for scheduled pick-up');
            }
          });
          
          cancelBtn.addEventListener('click', () => {
            dateTimePickerContainer.style.display = 'none';
            if (standardRadio) standardRadio.checked = true;
            if (scheduledRadio) scheduledRadio.checked = false;
            selectedPickupType = 'standard';
            scheduledDate = null;
            if (selectedDateTimeDisplay) selectedDateTimeDisplay.innerText = '';
          });
        }
        dateTimePickerContainer.style.display = 'block';
      } else {
        dateTimePickerContainer.style.display = 'none';
      }
    });
  }


  function initUserData() {
    const savedUser = localStorage.getItem("LastOrderUser");
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        if (emailInput && user.email) emailInput.value = user.email;
        if (fullNameInput && user.fullName) fullNameInput.value = user.fullName;
        if (addressInput && user.address) addressInput.value = user.address;
      } catch(e) {}
    }
  }

  function showTemporaryFeedback(message, type = 'success') {
    const feedback = document.createElement('div');
    feedback.className = `small mt-1 ${type === 'success' ? 'text-success' : type === 'info' ? 'text-info' : 'text-danger'}`;
    feedback.innerText = message;
    if (addMoreItemsBtn && addMoreItemsBtn.parentNode) {
      addMoreItemsBtn.parentNode.appendChild(feedback);
      setTimeout(() => feedback.remove(), 2000);
    }
  }


  function addMoreItems() {
    if (currentVendor && currentVendor.id) {
      sessionStorage.setItem("delivery-approach", currentApproach);
      window.location.href = `vendor-detail.html?id=${currentVendor.id}`;
    } else if (cartData && cartData.vendorId) {
      sessionStorage.setItem("delivery-approach", currentApproach);
      window.location.href = `vendor-detail.html?id=${cartData.vendorId}`;
    } else {
      window.location.href = 'delivery.html';
    }
  }


  function placeOrder() {
    const email = emailInput ? emailInput.value.trim() : '';
    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }
    if (!fullName) {
      alert('Please enter your full name');
      return;
    }
    if (currentApproach === 'delivery' && !address) {
      alert('Please enter your delivery address');
      return;
    }
    
    if (!cartData || !cartData.items || cartData.items.length === 0) {
      alert('Your cart is empty. Please add items before placing order.');
      return;
    }
    
    const subtotal = calculateSubtotal();
    if (currentVendor && subtotal < currentVendor.minDeliveryTotal) {
      alert(`Minimum order total is €${currentVendor.minDeliveryTotal}. Your subtotal is €${subtotal.toFixed(2)}`);
      return;
    }
    
    let pickupType = 'Standard 10 mins';
    if (selectedPickupType === 'scheduled' && scheduledDate && selectedDateTimeDisplay && selectedDateTimeDisplay.innerText !== '') {
      pickupType = 'Scheduled pick-up';
    }
    
    const finalTotalVal = getTotalWithFees();
    
    const userInfo = {
      email: email,
      fullName: fullName,
      address: address
    };
    localStorage.setItem("LastOrderUser", JSON.stringify(userInfo));
    
    saveOrderToHistory(email, fullName, address, pickupType, scheduledDate);
    
    const vendorNameForMessage = currentVendor ? currentVendor.name : 'Restaurant';
    const confirmMessage = `ORDER PLACED SUCCESSFULLY!`;
    
    alert(confirmMessage);
    
    clearCart();
    window.location.href = 'order.html';
  }


  function init() {
    const hasCart = loadCartData();
    
    if (hasCart) {
      updateVendorInfo();
      rebuildOrderTable();
      updateTotalsUI();
    }
    
    initScheduledPicker();
    initUserData();
    
    if (addMoreItemsBtn) {
      addMoreItemsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addMoreItems();
      });
    }
    
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', placeOrder);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();