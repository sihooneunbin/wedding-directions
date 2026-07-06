alert("script 연결 성공!");
const copyButton = document.getElementById("copyAddress");

copyButton.addEventListener("click", function(e){

    e.preventDefault();

    navigator.clipboard.writeText(
        "부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크"
    );

    alert("주소가 복사되었습니다.");

});
