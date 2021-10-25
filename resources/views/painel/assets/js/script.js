const { default: axios } = require("axios");

document.querySelector(".menu_btn").addEventListener("click", () => {
    document.querySelector(".topo_painel").classList.toggle("show-sidebar");
});

const deleteLoader = document.querySelector("#deleteLoader");

document.addEventListener("click", (e) => {
    et = e.target;
    const idSlide = et.getAttribute("deleteSlide")
        ? et.getAttribute("deleteSlide")
        : false;
    if (idSlide) {
        et.preventDefault;
        row = et.parentElement.parentElement;
        axios
            .post(
                "http://localhost:8000/api/deletar/slide/" + idSlide,
                {
                    _method: "DELETE",
                },
                {
                    onUploadProgress: (e) => {
                        let progress = Math.round((e.loaded * 100) / e.total);

                        deleteLoader.style.visibility = "visible";
                        deleteLoader.style.top = "50%";
                    },
                }
            )
            .then((res) => {
                if (res.status == 200) {
                    deleteLoader.style.visibility = "hidden";
                    deleteLoader.style.top = "-1000000px";
                    row.style.visibility = "hidden";
                    setTimeout(() => {
                        row.style.display = "none";
                    }, 50);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const idService = et.getAttribute("deleteService")
        ? et.getAttribute("deleteService")
        : false;
    if (idService) {
        et.preventDefault;
        row = et.parentElement.parentElement;
        axios
            .post(
                "http://localhost:8000/api/deletar/servico/" + idService,
                {
                    _method: "DELETE",
                },
                {
                    onUploadProgress: (e) => {
                        let progress = Math.round((e.loaded * 100) / e.total);

                        deleteLoader.style.visibility = "visible";
                        deleteLoader.style.top = "50%";
                    },
                }
            )
            .then((res) => {
                if (res.status == 200) {
                    deleteLoader.style.visibility = "hidden";
                    deleteLoader.style.top = "-1000000px";
                    row.style.visibility = "hidden";
                    setTimeout(() => {
                        row.style.display = "none";
                    }, 50);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const idSkill = et.getAttribute("deleteSkill")
        ? et.getAttribute("deleteSkill")
        : false;
    if (idSkill) {
        et.preventDefault;
        row = et.parentElement.parentElement;
        axios
            .post(
                "http://localhost:8000/api/deletar/habilidade/" + idSkill,
                {
                    _method: "DELETE",
                },
                {
                    onUploadProgress: (e) => {
                        let progress = Math.round((e.loaded * 100) / e.total);

                        deleteLoader.style.visibility = "visible";
                        deleteLoader.style.top = "50%";
                    },
                }
            )
            .then((res) => {
                if (res.status == 200) {
                    deleteLoader.style.visibility = "hidden";
                    deleteLoader.style.top = "-1000000px";
                    row.style.visibility = "hidden";
                    setTimeout(() => {
                        row.style.display = "none";
                    }, 50);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
