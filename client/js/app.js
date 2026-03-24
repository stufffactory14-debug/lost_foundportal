const form = document.getElementById("uploadForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData(form);

        const type = formData.get("type");

        console.log("Item Type:", type); // debug

        try {
            const res = await fetch("http://localhost:5000/api/items/create", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            alert(data.message);

            form.reset();

        } catch (error) {
            console.error(error);
            alert("Error submitting item");
        }

    });

}