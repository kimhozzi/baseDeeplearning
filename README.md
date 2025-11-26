# baseDeeplearning
보X턴 어디갔냐?? + 비트코인 가격 예측 추가-서버 플라스크 ㅇㅇ

1.다중 선형 회귀분석 모델 적용한
time_step[간격] 이용하여 미래시점의 최고가 최저가 현재가 가격 분석모델

항목	버전 / 도구
언어	Python 3.9
개발 환경	Jupyter Notebook(분석), VSCode
웹 서버	Flask
AI 라이브러리	TensorFlow 2.10.1, Keras 2.10.0
머신러닝	scikit-learn 1.6.1
시각화	matplotlib 3.9
수치 계산	numpy 2.26.4
---------------STRUCTURE---------------
PythonProject/
├─ WebServiceAI.py                 # Flask 서버 메인 파일 (라우팅)
│
├─ ai_service/                     # AI 모델 및 서비스 레이어
│  ├─ CoinPredict.py               # 예측 로직
│  ├─ CoinService.py               # Flask와 모델 연결하는 서비스 계층
│  ├─ CoinTrain.py                 # 데이터 전처리 + 모델 학습
│  ├─ models/                      # 저장된 모델(.h5), 스케일러 파일
│  └─ metrics/                     # 에러율, 성능 지표 저장(JSON 등)
│
├─ static/                         # 정적 리소스
│  ├─ chart/                       # 학습 결과 그래프, 오차율 이미지
│  ├─ js/                          # 프론트엔드 JS(AJAX 등)
│  ├─ css/                         # 스타일 시트
│  └─ jpg/                         # 이미지 리소스
│
└─ templates/                      # Flask Jinja2 템플릿
   ├─ index.html
   └─ regression.html


WORKFLOW
CoinTrain.py       → 데이터 로딩 및 전처리, 모델 훈련
      ↓
models/            → 훈련된 모델(.h5), 스케일러 저장
      ↓
CoinService.py     → Flask 라우팅 요청 처리
      ↓
CoinPredict.py     → 실제 예측 수행
      ↓
templates/         → 결과 페이지 렌더링

   
