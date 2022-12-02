# movieRecommed
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

   







