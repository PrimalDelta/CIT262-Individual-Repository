import hello from "../utils/helloworld.js";

it("Should say hello",()=>{
    const helloString = hello();
    console.log(helloString);
})