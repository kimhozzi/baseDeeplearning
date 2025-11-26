# baseDeeplearning
보X턴 어디갔냐?? + 비트코인 가격 예측 추가-서버 플라스크 ㅇㅇ

1.다중 선형 회귀분석 모델 적용한
time_step[간격] 이용하여 미래시점의 최고가 최저가 현재가 가격 분석모델

## 🛠 개발 환경

| 항목 | 버전 |
|------|------|
| 언어 | Python 3.9 |
| 개발 환경 | Jupyter Notebook |
| 웹 서버 | Flask |
| AI 라이브러리 | TensorFlow 2.10.1, Keras 2.10.0 |
| 머신러닝 | scikit-learn 1.6.1 |
| 시각화 | matplotlib 3.9 |
| 수치 계산 | numpy 2.26.4 |

---

## 📁 프로젝트 구조

```
PythonProject/
├─ WebServiceAI.py
│
├─ ai_service/
│   ├─ CoinPredict.py
│   ├─ CoinService.py
│   ├─ CoinTrain.py
│   ├─ models/
│   └─ metrics/
│
├─ static/
│   ├─ chart/
│   ├─ js/
│   ├─ css/
│   └─ jpg/
│
└─ templates/
    ├─ index.html
    └─ regression.html
```


WORKFLOW
```
CoinTrain.py       → 데이터 로딩 및 전처리, 모델 훈련
      ↓
models/            → 훈련된 모델(.h5), 스케일러 저장
      ↓
CoinService.py     → Flask 라우팅 요청 처리
      ↓
CoinPredict.py     → 실제 예측 수행
      ↓
templates/         → 결과 페이지 렌더링
```
   ## 📁 프로세스
   1.데이터 수집 데이터 분석 전처리 순차모델구성 훈련결과시각화 정확율 시각화, 수치화 예측함수 작성 웹서비스연동모듈 웹서버 클라이언트구현
