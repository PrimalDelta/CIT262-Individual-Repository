import hello from "../utils/helloworld.js";

it("Should say Jared",()=>{
    const helloString = hello();
    console.log(helloString);

    expect(helloString).toBe("Jared")
})