# LearnChart
쉽게 접할 수 있는 포트폴리오 사이트

## 목차
  - [목차](#목차)
  - [Ⅰ. 프로젝트 실행 동기 및 목적](#ⅰ-프로젝트-실행-동기-및-목적)
  - [Ⅱ. 이론적 배경(기존 사례)](#ⅱ-이론적-배경기존-사례)
  - [Ⅲ. 프로젝트 방법 및 과정](#ⅲ-프로젝트-방법-및-과정)
    - [1. 개발 순서 구상](#1-개발-순서-구상)
      - [1) 프로그램에 포함되어야 할 기능](#1-프로그램에-포함되어야-할-기능)
      - [2) 사용자 진행 순서도](#2-사용자-진행-순서도)
    - [2. 사용 기술 선정](#2-사용-기술-선정)
    - [3. 데이터베이스 설계](#3-데이터베이스-설계)
    - [4. 기능 구현](#4-기능-구현)

## Ⅰ. 프로젝트 실행 동기 및 목적
기본적으로 포트폴리오는 학생들이 사용하기에 까다롭기도 하고 어떤 것을 넣어야 되는지 부담감이 생긴다는 단점이 있다.
이러한 점을 해결하여 학생들이 부담을 덜고 포트폴리오를 작성할 수 있도록 이 프로젝트를 기획하였다.

본 프로젝트는 좀 더 포트폴리오를 간편하게 작성하고 공부효율을 높히고 학습량을 알아볼 수 있도록 제작하는 것을 목적으로 한다.

## Ⅱ. 이론적 배경(기존 사례)
주로 포트폴리오 작성을 위해 사용하는 사이트 깃허브, 노션등은 사용법이 어렵거나 혹은 유저들이 올바르게 사용하지 못하고 있다.

* 포트 폴리오 자체에 대한 인식이 낮음
* 복합적인 형태의 포트폴리오
* 높은 접근성

이 프로젝트를 통해 다른 포트폴리오 사이트(예-깃허브, 노션 등)의 단점을 보완하고 장점을 활용할 것이다.

## Ⅲ. 프로젝트 방법 및 과정
### 1. 개발 순서 구상
![화면 캡처 2022-03-29 215427](https://user-images.githubusercontent.com/81201101/160825996-27719cfc-e088-47ed-8a85-4ed912721970.png)


#### 1) 프로그램에 포함되어야 할 기능
* 사용자 로그인 기능을 구현
* 학습역량 체크(예시-깃허브의 잔디)
* 게시한 글을 기준을 나누어 정렬
* 파일 업로드
#### 2) 사용자 진행 순서도
![qq](https://user-images.githubusercontent.com/81201101/160827186-babae781-5313-4112-83e6-ba668feaecc1.png)

### 2. 사용 기술 선정

1. MariaDB(DBMS)
2. HeidiSQL
3. VSC
4. NodeJS
5. reactJS 


### 3. 데이터베이스 설계
![DB설계](https://user-images.githubusercontent.com/81201101/160826491-e3d45be0-9e5a-4999-9bb9-3ba6fa9c6437.png)


### 4. 기능 구현