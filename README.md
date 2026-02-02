# 학생 포트폴리오 웹사이트

이것은 학생들이 자신의 대학교와 학점을 보여주는 간단한 포트폴리오 웹사이트입니다.

## 배포 안내 (GitHub Pages)

GitHub Pages를 사용하여 이 웹사이트를 쉽게 배포할 수 있습니다.

1.  **GitHub에 새로운 저장소(Repository)를 만듭니다.**
    *   저장소 이름은 `<your-username>.github.io` 로 하는 것을 추천합니다. (예: `my-username.github.io`)
    *   `Public` 저장소로 만들어야 합니다.

2.  **이 프로젝트의 파일들을 თქვენს 로컬 컴퓨터에서 GitHub 저장소로 Push 합니다.**

    ```bash
    # Git 초기화 (아직 안했다면)
    git init
    git branch -M main

    # 원격 저장소 추가
    git remote add origin https://github.com/<your-username>/<your-repo-name>.git

    # 모든 파일을 스테이징
    git add .

    # 첫 커밋
    git commit -m "Initial commit: 포트폴리오 웹사이트 생성"

    # main 브랜치로 Push
    git push -u origin main
    ```
    **참고:** `<your-username>` 와 `<your-repo-name>` 을 자신의 GitHub 사용자 이름과 저장소 이름으로 변경해주세요.

3.  **GitHub Pages 설정하기**
    *   GitHub 저장소 페이지에서 **Settings** 탭으로 이동합니다.
    *   왼쪽 메뉴에서 **Pages**를 선택합니다.
    *   **Source** 섹션에서, 드롭다운 메뉴를 `main` 브랜치로 선택하고 `/root` 폴더를 선택한 후 **Save** 버튼을 누릅니다.

4.  **배포 확인**
    *   몇 분 후, თქვენს 웹사이트는 `https://<your-username>.github.io/<your-repo-name>/` 주소에 배포됩니다.
    *   만약 저장소 이름을 `<your-username>.github.io`로 했다면, `https://<your-username>.github.io/` 에서 바로 확인할 수 있습니다.

이제 당신의 포트폴리오 웹사이트가 온라인에 배포되었습니다!
