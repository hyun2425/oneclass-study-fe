# GitHub 리포지토리 설정 가이드

로컬 프로젝트를 GitHub에 푸시하는 전체 과정을 안내합니다.

## 📋 사전 준비

1. GitHub 계정이 있어야 합니다
2. GitHub에서 새 리포지토리를 생성해야 합니다 (아래 단계 참고)

## 🚀 단계별 가이드

### 1단계: GitHub에서 리포지토리 생성

1. GitHub 웹사이트에 로그인
2. 우측 상단의 **+** 버튼 클릭 → **New repository** 선택
3. 리포지토리 정보 입력:
   - **Repository name**: `oneclass-study-fe` (또는 원하는 이름)
   - **Description**: (선택사항) 프로젝트 설명
   - **Public** 또는 **Private** 선택
   - ⚠️ **중요**: "Initialize this repository with a README" 체크하지 않기
   - "Add .gitignore" 선택하지 않기 (이미 있음)
   - "Choose a license" 선택하지 않기
4. **Create repository** 클릭

### 2단계: 로컬 Git 저장소 초기화 (이미 완료됨)

```bash
git init
```

### 3단계: 파일 추가 및 커밋

```bash
# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: React + Vite 프로젝트"
```

### 4단계: GitHub 리포지토리 연결

GitHub에서 생성한 리포지토리의 URL을 확인하세요:
- 예: `https://github.com/[사용자명]/oneclass-study-fe.git`

```bash
# 원격 저장소 추가 (URL을 실제 리포지토리 URL로 변경)
git remote add origin https://github.com/[사용자명]/oneclass-study-fe.git

# 원격 저장소 확인
git remote -v
```

### 5단계: 브랜치 이름 확인 및 설정

```bash
# 현재 브랜치 확인
git branch

# main 브랜치로 이름 변경 (필요한 경우)
git branch -M main
```

### 6단계: GitHub에 푸시

```bash
# 첫 푸시
git push -u origin main
```

인증이 필요하면:
- GitHub Personal Access Token 사용 (권장)
- 또는 GitHub CLI 사용

## 🔐 인증 방법

### 방법 1: Personal Access Token (권장)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **Generate new token (classic)** 클릭
3. 권한 선택:
   - `repo` (전체 체크)
4. 토큰 생성 후 복사
5. 푸시할 때 비밀번호 대신 토큰 사용

```bash
# 푸시 시 Username은 GitHub 사용자명, Password는 토큰 입력
git push -u origin main
```

### 방법 2: GitHub CLI

```bash
# GitHub CLI 설치 (없는 경우)
# macOS: brew install gh

# 로그인
gh auth login

# 푸시
git push -u origin main
```

## ✅ 확인 방법

1. GitHub 리포지토리 페이지로 이동
2. 모든 파일이 업로드되었는지 확인
3. `.github/workflows/deploy.yml` 파일이 있는지 확인

## 🎯 다음 단계

푸시가 완료되면:
1. GitHub 리포지토리 → **Settings** → **Pages**
2. **Source**를 **GitHub Actions**로 선택
3. `vite.config.ts`의 `repositoryName`을 리포지토리 이름과 일치시키기
4. 다시 푸시하면 자동으로 배포 시작!

## 💡 유용한 Git 명령어

```bash
# 상태 확인
git status

# 변경사항 확인
git diff

# 커밋 히스토리
git log --oneline

# 원격 저장소 정보
git remote -v
```

