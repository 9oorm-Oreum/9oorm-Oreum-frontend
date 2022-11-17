import styled from "styled-components";

function App() {
  const Button = styled.button`
    widht: 100px;
    height: 100px;
    background-color: yellow;
  `;

  const shareKakao = () => {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Share.sendDefault({
        objectType: "location",
        address: "제주특별자치도 서귀포시 성산읍 동류암로 20",
        addressTitle: "제주 플레이스캠프",
        content: {
          title: "신메뉴 출시♥︎ 체리블라썸라떼",
          description: "이번 주는 체리블라썸라떼 1+1",
          imageUrl:
            "http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
        ],
      });
    }
  };

  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
}

export default App;
