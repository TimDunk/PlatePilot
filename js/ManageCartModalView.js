// Author： Xuquan Deng
class ManageCartModalView{
    constructor(){
        this.modalElement=document.getElementById("manage-menuitems-modal");
        this.modal = new bootstrap.Modal(this.modalElement);
        this.listenCheckingInput();
        this.validateInstructionsLength();
        this.handleHidden();
        this.manageQuantity();
        this.currentQuantity=1;
        this.relatedTarget=null;
    }

    clearUpData(){
        document.getElementById("special-instruction").value="";
        document.getElementsByClassName("length_instrument")[0].textContent="0 / 150";
        this.modalElement.querySelectorAll(".selection-list").forEach(
            element =>{
                element.remove();
            }
        );
    }

    handleHidden(){
        this.modalElement.addEventListener("hide.bs.modal",
            event => {
                setTimeout(
                    ()=>{
                        const mainContent = this.relatedTarget?this.relatedTarget:document.body;
                        mainContent.setAttribute("tabindex","-1");
                        mainContent.focus();
                        this.clearUpData(); 
                    },50);
            }
        );

        this.modalElement.addEventListener("hiden.bs.modal",
            event => {
                this.modal.dispose();
            }
        );
    }

    setSelectionList(currentItem,cart){
        if(currentItem.getVariants().length>0){
            const template=this.modalElement.querySelector("#selection-item-template");
            const optionWrapperTemplate=this.modalElement.querySelector("#option-wrapper-template");
            let clone=document.importNode(template.content,true);
            currentItem.getVariants().forEach( variant => {
                let optionWrapper=document.importNode(optionWrapperTemplate.content,true);
                optionWrapper.querySelector(".option-wrapper").children[0].children[0].innerText=variant.name;
                optionWrapper.querySelector(".option-wrapper").children[0].children[1].innerText="+" +"€ "+ variant.extraFee;
                optionWrapper.querySelector(".option-wrapper").children[1].children[0].value=variant.id;
                optionWrapper.querySelector(".option-wrapper").children[1].setAttribute("for",`group-1-option-${variant.id}`);
                optionWrapper.querySelector(".option-wrapper").children[1].children[0].setAttribute("id",`group-1-option-${variant.id}`);
                optionWrapper.querySelector(".option-wrapper").children[1].children[0].setAttribute("name",`variants-group`);
                clone.querySelector(".selection-option-wrapper").appendChild(optionWrapper);
            });
            const selectionList=clone.children[0];
            selectionList.classList.add("required-list");
            selectionList.classList.add("block-main-color-background");
            selectionList.classList.add("variants-list");
            selectionList.setAttribute("data-is-completed",cart.vendorId?"true":"false");
            
            clone.querySelector(".selection-tag").children[0].classList.add("required-tag");
            clone.querySelector(".selection-tag").children[0].classList.add("required-tag");
            clone.querySelector(".selection-tag").children[0].children[0].innerText="Required";
            const insertBeforeElement=this.modalElement.querySelector(".modal-body>div.special-instruction");
            insertBeforeElement.before(clone);
        }
        if(currentItem.getToppings().flatMap(x=>x.options).length > 0){
            let toppingData=currentItem.getToppings();
            const toppings=currentItem.toppings;
            for(let i = 0;i < toppings.length;i++){
                if(toppings[i].options==undefined || toppings[i].options.length==0)
                    continue;
                else{
                    let isRequired=toppings[i].required ? toppings[i].required : false; //boolean
                    const template=this.modalElement.querySelector("#selection-item-template");
                    const optionWrapperTemplate=this.modalElement.querySelector("#option-wrapper-template");
                    let clone=document.importNode(template.content,true);
                    clone.querySelector(".course_type").innerText="Topping";
                    toppings[i].options.forEach(
                        toppingId =>{
                            const td=toppingData.find(t=>t.id==toppingId);
                            if(td){
                                let optionWrapper=document.importNode(optionWrapperTemplate.content,true);
                                optionWrapper.querySelector(".option-wrapper").children[0].children[0].innerText=td.name;
                                optionWrapper.querySelector(".option-wrapper").children[0].children[1].innerText="+" +"€ "+ td.price;
                                optionWrapper.querySelector(".option-wrapper").children[1].children[0].value=td.id;
                                optionWrapper.querySelector(".option-wrapper").children[1].setAttribute("for",`group-${i+2}-option-${td.id}`);
                                optionWrapper.querySelector(".option-wrapper").children[1].children[0].setAttribute("id",`group-${i+2}-option-${td.id}`);
                                optionWrapper.querySelector(".option-wrapper").children[1].children[0].setAttribute("data-is-checked","false");
                                optionWrapper.querySelector(".option-wrapper").children[1].children[0].setAttribute("name",`toppings-group-${i+1}`);
                            
                                clone.querySelector(".selection-option-wrapper").appendChild(optionWrapper);
                            }
                        }
                    );
                    const selectionList=clone.children[0];
                    
                    if(isRequired){
                        selectionList.classList.add("block-main-color-background");
                        selectionList.classList.add("required-list");
                        selectionList.setAttribute("data-is-completed",cart.vendorId?"true":"false");
                        clone.querySelector(".selection-tag").children[0].classList.add("required-tag");
                    }else{
                        selectionList.classList.add("optional-list");
                        clone.querySelector(".selection-tag").children[0].classList.add("optional-tag");
                    } 
                    selectionList.classList.add("toppings-list");
                    selectionList.setAttribute("data-is-completed",cart.vendorId?"true":"false");
                    
                    clone.querySelector(".selection-tag").children[0].children[0].innerText=isRequired ? "Required":"Optional";
                    const insertBeforeElement=this.modalElement.querySelector(".modal-body>div.special-instruction");
                    insertBeforeElement.before(clone);
                }
            }
            
        }

        if(cart.vendorId){ //set the value from cart

        }else{ //No need to set the value
            this.modalElement.querySelector(".add-to-cart-btn-in-modal").removeAttribute("disabled");
            this.currentQuantity=1;
            this.modalElement.querySelector(".current-quantity").textContent=this.currentQuantity;
        }
        this.controlAddingBtn(this.validateRequiredSelction()); 
    }

    openOrderModal(relatedTarget,currentItem,cart={}){
        this.relatedTarget=relatedTarget;
        this.currentItem=currentItem;
        this.modalElement.querySelector(".modal-title").innerText=currentItem.name;
        this.modalElement.querySelector(".modal-body picture img").setAttribute("src",`../images/624W/${currentItem.picture}`);
        this.modalElement.querySelector(".dish-info").children[0].children[0].innerText=currentItem.name;
        this.modalElement.querySelector(".dish-info").children[1].children[0].innerText="€ "+currentItem.price;
        this.modalElement.querySelector(".dish-info").children[2].innerText=currentItem.description;
        this.setSelectionList(currentItem,cart);
        
        this.modal.show();
    }

    controlAddingBtn(canUnChecked){
        if(canUnChecked){
            this.modalElement.querySelector(".add-to-cart-btn-in-modal").removeAttribute("disabled");
        }else{
            this.modalElement.querySelector(".add-to-cart-btn-in-modal").setAttribute("disabled","");                   
        } 
    }

    listenCheckingInput(){
        let modalBody=this.modalElement.querySelector(".modal-body");
        modalBody.addEventListener("click",
            (event) => {
                if(event.target.classList.contains("option-radio-input")){
                    let selectionList=event.target.closest(".selection-list");
                    if(selectionList.classList.contains("optional-list")){
                        let isChecked=event.target.dataset.isChecked;
                        if(isChecked=="true"){
                            event.target.checked=false;
                            event.target.dataset.isChecked="false";
                        }else{
                            let allInputs=selectionList.querySelectorAll("input.option-radio-input");
                            allInputs.forEach(element => {
                                element.checked=false;
                                element.dataset.isChecked="false";
                            });
                            event.target.checked=true;
                            event.target.dataset.isChecked="true";
                        }
                        
                    }else if(selectionList.classList.contains("required-list")){
                        this.controlAddingBtn(this.validateRequiredSelction());                      
                    }
                }                
                event.stopPropagation();
            }
        );
    }

    validateInstructionsLength(){
        let inputTextCounter=document.getElementsByClassName("length_instrument");
        let inputText=document.getElementById("special-instruction");
        if(!inputTextCounter|| !inputText){
            // console.log("Can not find the inputed text counter element.");
            return;
        }else{
            inputText.addEventListener("input",(e)=>{
                let len=inputText.value.length;
                inputTextCounter[0].textContent=`${len} / 150`;
            });
        }
    }

    manageQuantity(){   
        this.modalElement.querySelector(".button-wrapper-in-modal").addEventListener("click",
            event =>{
                let quantityTxt=this.modalElement.querySelector(".current-quantity").textContent;
                let quantity=Number(quantityTxt);
                if(event.target.id=="decrease-btn-in-modal"){
                    if(quantity>1)
                        quantity=quantity-1;
                }else if(event.target.id=="increase-btn-in-modal"){
                    quantity=quantity+1;
                }
                this.modalElement.querySelector(".current-quantity").textContent=quantity;
                this.currentQuantity=quantity;
        });
    }

    bindAdding(handler){
        const addBtn=this.modalElement.querySelector(".add-to-cart-btn-in-modal");
        addBtn.addEventListener("click",
            event =>{
                // console.log("Required Selection are selected? "+ this.validateRequiredSelction());
                if(this.validateRequiredSelction()){
                    const selectedVariant=this.modalElement.querySelector("div.variants-list input:checked");
                    const variants=selectedVariant ? [Number(selectedVariant.value)] : [];
                    const toppings=[];
                    const toppingInputs=this.modalElement.querySelectorAll("div.toppings-list input:checked");
                    toppingInputs.forEach( input => {
                        toppings.push(Number(input.value));
                    });
                    const instruction=document.getElementById("special-instruction").value;
                    handler(this.relatedTarget,this.currentItem,this.currentQuantity,variants,toppings,instruction);
                    this.modal.hide();
                    event.stopPropagation();
                }
        });
    }

    validateRequiredSelction(){
        let requireList=this.modalElement.querySelectorAll(".required-list");
        if(requireList.length == 0)
            return true;

        let isAllSelected=true;
        requireList.forEach(element => {
            let hasSelected=false;
            let inputs=element.querySelectorAll("input");
            if(inputs.length==0)
                hasSelected=true;
            else
                inputs.forEach(input=>hasSelected=input.checked || hasSelected);
            isAllSelected= hasSelected && isAllSelected;
        });
        return isAllSelected;
    }

}