# movieRecommed

####  소개

___

##### 작성 목적

7조, 13조가 선정한 서비스는 영화 추천 서비스입니다.

 이 설계서는 7조, 13조가 영화 추천 서비스에 대해 알아본 것을 바탕으로 유사 서비스 분석, 데이터 흐름도, 사용된 오픈소스, E-R 다이어그램, 오픈소스 정리, 서비스 제공 방법 등을 설명하고 정리하기 위해 작성했습니다.

___

##### 배경

 영화 추천 서비스를 선정한 이유는 근래 쉽게 자신이 원하는 영화나 드라마를 원하는 시간에 볼 수 있는 ott 서비스가 많이 출시되고 인기가 높아졌습니다.

이처럼 많은 사람들에게 친근한 서비스이기에 특별히 다른 차별화를 시키기보다는 해당 ott 서비스를 비교, 분석하고 어떤 원리로 구동되는지 알아보기 위함입니다.

___

##### 역할

이번 과제를 위해 서비스 선정, 선정된 서비스 구체화, 서비스 소개, 유사 서비스 분석, 시스템 설계 내용 요약, dfd 작성, 필요한 오픈소스 조사, git hub 사용, PR, 발표, 사용하는 오픈소스 조사 및 소개 등 필요한 작업을 각 조원이 각자 맡은 역할에 따라 나눠서 진행했습니다.

___

##### 기능

 7조, 13조가 구상한 영화 추천 서비스는 웹 기반 서비스로서 서비스 이용자의 연령, 국가, 성별, 취향 즉, 사용자가 입력한 기본 정보와 서비스를 사용하면서 쌓이는 데이터 등을 바탕으로 오픈소스(React, React Native, Bootstrap, Django, peewee, Elastic search, Pytorch FM)가 상호작용하며 사용자별 맞춤 추천 영화를 제공해주는 기능을 가지고 있습니다.
4가지 필터링 방식을 사용하여 영화 추천 서비스를 제공하며
또한 주간 영화 BEST, 박스오피스 순위, 예매 순위, OTT 영화 순위 등의 현재 인기 있는 영화나 장르별 추천이 가능합니다.

이를 바탕으로 서비스 이용자는 데이터 기반으로 추천되는 영화뿐만 아니라 찾고 있는 영화나 영화의 정보 등을 폭넓게 알 수 있게 됩니다.

___

Movie

![DFD버전2](https://user-images.githubusercontent.com/51906310/205207274-e3f67389-0ab0-450a-9996-f7d2ee4aea76.png)


### MovieLens 데이터 세트

___

##### 미네소타 대학교 컴퓨터 공학과의 연구실 GropLens Research 에서 개인화 추천에 대한 연구 데이터를 수집하기 위해 만든 웹사이트에서 수집한 정보를 데이터 세트로 공개한 것

___

다수의 사용자가 인 당 5~20 건의 영화를 평가하여 매우 많은 종류의 태그 정보로 나누어진 매우 많은 수의 영화에 매긴 영화 평가 정보 데이터 세트

그 밖에도 다수의 태그에 걸쳐 각 영화에 대한 관련성 점수를 가진 태그 게놈 데이터를 포함 하고 있습니다.

___

##### 주의할 점

해당 데이터는 (No demographic information) 인구 통계 정보가 포함되어 있지 않습니다.

각 사용자는 ID로 표시되며 다른 정보는 제공되지 않습니다.

___

##### 제공 타입

* 구 버전

  * #### MovieLens 100K 데이터세트

    MovieLens 100K 영화 등급 . 안정적인 벤치마크 데이터 세트. 1700개의 영화에 대한 1000명의 사용자로부터 100,000개의 평가. 1998년 4월 출시.

  * #### MovieLens 1M 데이터 세트

    MovieLens 1M 영화 등급 . 안정적인 벤치마크 데이터 세트. 4000편의 영화에 대해 6000명의 사용자로부터 100만 평가를 받았습니다. 2003년 2월 출시.

  * #### MovieLens 10M 데이터 세트

    MovieLens 천만 영화 등급 . 안정적인 벤치마크 데이터 세트. 72,000명의 사용자가 10,000편의 영화에 1,000만 개의 평가와 100,000개의 태그 애플리케이션을 적용했습니다. 2009년 1월 출시.

  * #### MovieLens 20M 데이터 세트

    MovieLens 2천만 영화 등급 . 안정적인 벤치마크 데이터 세트. 138,000명의 사용자가 27,000편의 영화에 2,000만 개의 평가와 465,000개의 태그 애플리케이션을 적용했습니다. 1,100개의 태그에서 1,200만 개의 관련성 점수가 있는 태그 게놈 데이터를 포함합니다. 2015년 4월 출시; 2016년 10월 업데이트되어 links.csv를 업데이트하고 태그 게놈 데이터를 추가했습니다.

* 전체(*Full*)

  * 16200명의 사용자가 100만 개의 태그 정보로 나뉘어 진 62000편의 영화에 매긴 2500만 개의 평가 정보를 담고 있습니다. 

    그 밖에도 1129개의 태그에 걸쳐 1500만 개의 관련성 점수를 가진 태그 게놈 데이터를 포함 하고 있습니다. (원문:  Includes tag genome data with 15 million relevance scores across 1,129 tags. Released 12/2019)

* 소형(*Small*)

  * 600명의 사용자가 3600 개의 태그 정보로 나뉘어 진 9000편의 영화에 매긴 100000 개의 평가 정보를 담고 있습니다.

___

#### 사용 라이선스 전문

Neither the University of Minnesota nor any of the researchers involved can guarantee the correctness of the data, its suitability for any particular purpose, or the validity of results based on the use of the data set. The data set may be used for any research purposes under the following conditions:

- The user may not state or imply any endorsement from the University of Minnesota or the GroupLens Research Group.
- The user must acknowledge the use of the data set in publications resulting from the use of the data set (see below for citation information).
- The user may not redistribute the data without separate permission.
- The user may not use this information for any commercial or revenue-bearing purposes without first obtaining permission from a faculty member of the GroupLens Research Project at the University of Minnesota.
- The executable software scripts are provided "as is" without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of them is with you. Should the program prove defective, you assume the cost of all necessary servicing, repair or correction.

In no event shall the University of Minnesota, its affiliates or employees be liable to you for any damages arising out of the use or inability to use these programs (including but not limited to loss of data or data being rendered inaccurate).

If you have any further questions or comments, please email [grouplens-info@umn.edu](mailto:grouplens-info@umn.edu)

___

#### + 사용 요청 양식 링크

https://docs.google.com/forms/d/e/1FAIpQLSdS6ZdesxmgOHPdO9PjUd31vB2_5CC-KxfaE825qTJhOsQ6Fg/viewform

___

#### 해당 데이터 세트를 사용하는 이유

* 저희 팀이 설계한 영화 추천 서비스에서 사용하기로 한 오픈소스인 Pytorch FM의 아래 세 모델을 학습시키고 활용하기 위해서 입니다.

  * 신경 협력 필터링 모델
  * 인수 분해 기계 모델
  * 와이드 딥 모델

* Cold start 문제를 해결 하기 위해서 입니다. 

  * 사용자의 정보가 충분히 쌓이지 않았을 경우에도 단순 사용자의 선호 영화 정보만 을 가지 해당 데이터 세트를 통해 영화 추천 서비스를 제공하는 것이 가능 하기 때문입니다.


---
## GUI

<img src="./GUI/mainGUI.png">

* 메인화면

<img src="./GUI/detailGUI.png">

* 상세화면

---
