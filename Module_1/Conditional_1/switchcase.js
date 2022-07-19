let month = 9;
switch(month){
    case 1:
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`${month} 30 days`);
        break;
    case 2:{
        console.log(`${month} 28 or 2 days`);
        break;
    }
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
        console.log(`${month} 31 days`);
        break;
    }
    default:{
        console.log(`${month} is invalid`);
        break;
    }
}