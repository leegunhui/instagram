document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editName")
        let ok= document.querySelector("#ok")
        let newName = document.querySelector("#newName")
        let name = document.querySelector("#name")

        nameEditButton.addEventListener("click",
            function(e){
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        ok.addEventListener("click",
            function(e){
                name.textContent = newName.value
                editName.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )

    }
)

