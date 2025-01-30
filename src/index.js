import "./styles.css";
import { HashMap } from "./classes/HashMap";

const newHash = new HashMap();

newHash.set("MIqueias", 29);
newHash.set("Iversson", 30);
newHash.set("M233", 29);
newHash.set("IlAND", 30);

console.log(newHash.entries());
