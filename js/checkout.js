(function() {
  // DOM elements
  const scheduledTrigger = document.getElementById('scheduledTrigger');
  const dateTimePickerContainer = document.getElementById('dateTimePickerContainer');
  const selectedDateTimeDisplay = document.getElementById('selectedDateTimeDisplay');
  const editEmailLink = document.getElementById('editEmailLink');
  const userEmailSpan = document.getElementById('userEmail');
  const addMoreItemsBtn = document.getElementById('addMoreItemsBtn');
  const placeOrderBtn = document.getElementById('placePickupOrderBtn');
  const finalTotalSpan = document.getElementById('finalTotal');
  const originalPriceSpan = document.getElementById('originalPriceSpan');
  const savedAmountSpan = document.getElementById('savedAmountBadge');
  const orderItemsTableBody = document.getElementById('orderItemsTableBody');

  // Base order items
  const baseOrderItems = [
    { name: "Grilled Salmon", price: 30.4 },
    { name: "Lee Kum Kee J x Scaldling Lettuce", price: 16 },
    { name: "Gyumeshi + M", price: 36 }
  ];

  // Additional items added by user
  let addedItems = [];
  
  // Constants for pricing
  const SERVICE_FEE = 2.6;
  const PROMO_DISCOUNT = 20.6; // Difference between crossed price and final price

  // Scheduled pick-up state
  let scheduledDate = null;

  /**
   * Calculate current subtotal from all items
   */
  function calculateSubtotal() {
    let itemsSum = baseOrderItems.reduce((sum, item) => sum + item.price, 0);
    for (let extra of addedItems) {
      itemsSum += extra.price;
    }
    return itemsSum;
  }

  /**
   * Get final total including service fee
   */
  function getTotalWithFees() {
    return calculateSubtotal() + SERVICE_FEE;
  }

  /**
   * Get original crossed price (before promotion)
   */
  function getOriginalCrossPrice() {
    return calculateSubtotal() + SERVICE_FEE + PROMO_DISCOUNT;
  }

  /**
   * Update all total displays
   */
  function updateTotalsUI() {
    const finalVal = getTotalWithFees();
    const originalCross = getOriginalCrossPrice();
    const saved = originalCross - finalVal;
    
    finalTotalSpan.innerText = `HK$ ${finalVal.toFixed(1)}`;
    originalPriceSpan.innerText = `HK$ ${originalCross.toFixed(1)}`;
    
    if (saved > 0.01) {
      savedAmountSpan.innerHTML = `(You save HK$ ${saved.toFixed(1)})`;
      savedAmountSpan.style.color = "#2e7d64";
      savedAmountSpan.style.fontSize = "0.7rem";
    } else {
      savedAmountSpan.innerHTML = "";
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
   * Rebuild the order items table
   */
  function rebuildOrderTable() {
    if (!orderItemsTableBody) return;
    
    let html = '';
    
    // Base items
    baseOrderItems.forEach(item => {
      html += `
        <tr>
          <td class="item-name">${escapeHtml(item.name)}</td>
          <td class="item-price">HK$ ${item.price.toFixed(1)}</td>
        </tr>
      `;
    });
    
    // Added items
    addedItems.forEach((item, idx) => {
      html += `
        <tr data-added-idx="${idx}">
          <td class="item-name">
            ${escapeHtml(item.name)} 
            <span class="badge bg-light text-dark ms-1" style="font-size: 0.65rem;">added</span>
          </td>
          <td class="item-price">HK$ ${item.price.toFixed(1)}</td>
        </tr>
      `;
    });
    
    orderItemsTableBody.innerHTML = html;
    
    // Show/hide clear button for added items
    updateClearButtonVisibility();
  }

  /**
   * Show/hide the clear added items button
   */
  function updateClearButtonVisibility() {
    let clearBtn = document.getElementById('clearExtraItemsBtn');
    const addMoreContainer = document.querySelector('.add-more-link');
    
    if (addedItems.length > 0 && !clearBtn && addMoreContainer) {
      const btnDiv = document.createElement('div');
      btnDiv.className = 'mt-2';
      btnDiv.innerHTML = `
        <a href="#" id="clearExtraItemsBtn" class="small text-danger" style="text-decoration:none;">
          <i class="bi bi-arrow-counterclockwise"></i> Reset added items
        </a>
      `;
      addMoreContainer.insertAdjacentElement('afterend', btnDiv);
      
      document.getElementById('clearExtraItemsBtn').addEventListener('click', (e) => {
        e.preventDefault();
        addedItems = [];
        rebuildOrderTable();
        updateTotalsUI();
        const btn = document.getElementById('clearExtraItemsBtn');
        if (btn) btn.remove();
      });
    } else if (addedItems.length === 0 && clearBtn) {
      clearBtn.remove();
    }
  }

  /**
   * Add a sample item (for demo purposes)
   */
  function addSampleItem() {
    const newItem = { name: "Extra Edamame", price: 18.0 };
    addedItems.push(newItem);
    rebuildOrderTable();
    updateTotalsUI();
    
    // Show feedback
    showTemporaryFeedback('✓ Extra Edamame added (HK$18.0)', 'success');
  }


  function showTemporaryFeedback(message, type = 'success') {
    const feedback = document.createElement('div');
    feedback.className = `small mt-1 ${type === 'success' ? 'text-success' : 'text-danger'}`;
    feedback.innerText = message;
    addMoreItemsBtn.parentNode.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2000);
  }

  /**
   * Initialize scheduled pick-up picker
   */
  function initScheduledPicker() {
    if (!scheduledTrigger) return;
    
    scheduledTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (dateTimePickerContainer.style.display === 'none') {
        if (!document.getElementById('dynamicDateTimePicker')) {
          const pickerWrapper = document.createElement('div');
          pickerWrapper.className = 'p-3 bg-light rounded-3';
          pickerWrapper.style.border = '1px solid #f0eef2';
          pickerWrapper.style.width= '100%';
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
              selectedDateTimeDisplay.innerText = formatted;
              scheduledDate = val;
              dateTimePickerContainer.style.display = 'none';
              showTemporaryFeedback(`Pick-up scheduled for ${formatted}`, 'success');
            } else {
              alert('Please select a valid date and time for scheduled pick-up');
            }
          });
          
          cancelBtn.addEventListener('click', () => {
            dateTimePickerContainer.style.display = 'none';
          });
        }
        dateTimePickerContainer.style.display = 'block';
      } else {
        dateTimePickerContainer.style.display = 'none';
      }
    });
  }

  /**
   * Initialize email editing functionality
   */
  function initEmailEdit() {
    if (!editEmailLink) return;
    
    editEmailLink.addEventListener('click', (e) => {
      e.preventDefault();
      const newEmail = prompt('Enter your email address for order confirmation:', userEmailSpan.innerText);
      if (newEmail && newEmail.includes('@') && newEmail.includes('.')) {
        userEmailSpan.innerText = newEmail.trim();
        showTemporaryFeedback('Email updated successfully', 'success');
      } else if (newEmail && newEmail !== "") {
        alert('Please provide a valid email address');
      }
    });
  }

  /**
   * Initialize add more items functionality
   */
  function initAddMoreItems() {
    if (!addMoreItemsBtn) return;
    
    addMoreItemsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addSampleItem();
    });
  }

  /**
   * Place order - show confirmation and reset state
   */
  function placeOrder() {
    // Determine pick-up type
    let pickupType = 'Standard 10 mins';
    let scheduledMsg = '';
    if (scheduledDate && selectedDateTimeDisplay.innerText !== 'Select a date and time') {
      pickupType = 'Scheduled pick-up';
      scheduledMsg = ` at ${selectedDateTimeDisplay.innerText}`;
    }
    
    const email = userEmailSpan.innerText;
    const finalTotalVal = finalTotalSpan.innerText;
    
    // Build items list
    const itemsList = [];
    baseOrderItems.forEach(i => itemsList.push(`${i.name} (HK$${i.price.toFixed(1)})`));
    addedItems.forEach(i => itemsList.push(`${i.name} (HK$${i.price.toFixed(1)})`));
    
    // Build confirmation message
    const confirmMessage = `RDER PLACED SUCCESSFULLY!\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Pick-up: ${pickupType}${scheduledMsg}\n` +
      `Location: Matsuya (Tsim Sha Tsui)\n` +
      `Shop G06-09, G/F, Chuang's London Plaza\n` +
      `219 Nathan Road, Jordan Hong Kong\n\n` +
      `Items:\n- ${itemsList.join('\n- ')}\n\n` +
      `Total: ${finalTotalVal} (incl. fees & tax)\n` +
      `Confirmation sent to: ${email}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Thank you for ordering with PlatePilot! 🍱\n` +
      `Your order will be ready for pick-up shortly.`;
    
    alert(confirmMessage);
    
    // Optional: Reset scheduled state after order (but keep cart items for demo)
    // Uncomment below if you want to reset after order
    // scheduledDate = null;
    // selectedDateTimeDisplay.innerText = 'Select a date and time';
    // addedItems = [];
    // rebuildOrderTable();
    // updateTotalsUI();
  }

  /**
   * Initialize all components
   */
  function init() {
    initScheduledPicker();
    initEmailEdit();
    initAddMoreItems();
    
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', placeOrder);
    }
    
    // Initial UI updates
    updateTotalsUI();
    rebuildOrderTable();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();