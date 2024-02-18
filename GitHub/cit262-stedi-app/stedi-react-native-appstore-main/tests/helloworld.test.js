import hello from "../utils/hello";

it("Should say Jared",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Jared");
})