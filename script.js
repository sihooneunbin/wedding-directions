document.addEventListener("DOMContentLoaded", () => {

    // ===== 주소 복사 =====
    const copyButton = document.getElementById("copyAddress");
    const toast = document.getElementById("toast");

    if (copyButton) {
        copyButton.addEventListener("click", async (e) => {

            e.preventDefault();

            const address = "부산광역시 해운대구 센텀중앙로 79";

            try {
                await navigator.clipboard.writeText(address);
            } catch {
                const textarea = document.createElement("textarea");
                textarea.value = address;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }

            toast.classList.add("show");

            if (navigator.vibrate) {
                navigator.vibrate(30);
            }

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        });
    }

    // ===== Fade =====
    const fades = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    fades.forEach(item => observer.observe(item));

    // ===== Top Button =====
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ===== Opening =====

    window.scrollTo(0, 0);

    const opening = document.getElementById("opening");

    requestAnimationFrame(() => {

        setTimeout(() => {

            opening.classList.add("hide");

        }, 1800);

    });

    opening.addEventListener("transitionend", () => {

        opening.style.display = "none";

    });

});
kakao.maps.load(function () {

    const mapContainer = document.getElementById("kakaoMap");

    if (!mapContainer) return;

    const mapOption = {
        center: new kakao.maps.LatLng(35.174139, 129.1260944),
        level: 3
    };

const map = new kakao.maps.Map(mapContainer, mapOption);

const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(35.174139, 129.1260944)
});

marker.setMap(map);

const infowindow = new kakao.maps.InfoWindow({
content: `
<div style="
    padding:6px 10px;
    text-align:center;
    font-family:Pretendard,sans-serif;
    white-space:nowrap;
">
    <div style="font-size:14px;font-weight:600;">
        센텀사이언스파크
    </div>

    <div style="font-size:13px;color:#8b6b4c;margin-top:4px;">
        1층 라움홀
    </div>
</div>
`
});

let isOpen = false;

kakao.maps.event.addListener(marker, 'click', function () {

    if (isOpen) {
        infowindow.close();
        isOpen = false;
    } else {
        infowindow.open(map, marker);
        isOpen = true;
    }

});
});
