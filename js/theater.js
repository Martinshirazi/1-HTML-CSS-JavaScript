const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;




function buyTicket() {
    let age = prompt('What is your Age?');
    let cost = getBaseTicketCost(age);
    let newCost = getDiscounted(cost);
    alert("Thank you for purchasing your ticket from us, your total Cost will be $" + newCost); 
} 


function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
        }
    return GENERAL_ADMISSION_TICKET_COST;
}   



function getDiscounted(cost) {
    const isMatinee = prompt('Are you attending a matinee show? Y or N');
    if((isMatinee.toLowerCase() === 'yes') || (isMatinee.toLowerCase() === 'y')) {
         return cost - MATINEE_DISCOUNT;
        }
        
    }


