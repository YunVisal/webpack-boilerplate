import { addStyle, addText } from "./dom";
import users, {getDFUsers} from "./data";

console.log('index.js')
addStyle()
addText('Hello from dom.js!!!')

console.log(users)
console.log(getDFUsers())