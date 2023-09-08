document.getElementById("reg-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e)
    const response = await fetch("http://localhost:3000/users",
        {
            method: "POST"
            , headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: e.target.children.name.value,
                username: e.target.children.uname.value,
                email: e.target.children.Email.value,
                password: e.target.children.password.value
            })
        });
});