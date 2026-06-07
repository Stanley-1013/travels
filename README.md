# BUSAN 2026 旅遊計畫

兩人同行的釜山六天五夜旅遊網站，可直接部署至 GitHub Pages。

## 本機預覽

直接開啟 `index.html`，或在此目錄執行：

```bash
python3 -m http.server 8000
```

然後瀏覽 `http://localhost:8000`。

## 新增旅行照片

1. 將照片放進 `photos/`，建議檔名使用英數，例如 `day-1-beach.jpg`。
2. 在 `index.html` 的 `#album` 區段，把圖片路徑改成 `photos/day-1-beach.jpg`。
3. 建議先將照片縮至長邊 2000px 以下，避免 GitHub Pages 載入過慢。

## 發布到 GitHub Pages

建立 GitHub 遠端 repository 後：

```bash
git remote add origin <你的 GitHub repository URL>
git push -u origin main
```

接著到 GitHub repository：

`Settings` → `Pages` → `Deploy from a branch` → 選擇 `main` 與 `/ (root)`。

## 已確認資料

- 去程：濟州航空 `7C6164`，2026-06-28，桃園 TPE 02:50 → 釜山金海 PUS 06:10
- 回程：易斯達航空 `ZE987`，2026-07-03，釜山金海 PUS 22:10 → 桃園 TPE 00:15+1
- 住宿：Aank Resort & Spa Busan Haeundae
- 地址：56, Gunam-ro 18beon-gil, Haeundae-gu, Busan

航班時刻、票價、景點營業時間與預約規則仍應在出發前向官方來源確認。

## 圖片授權

網站目前使用 Wikimedia Commons 示意照片：

- `haeundae.jpg`：Haeundae Beach Busan，作者 bryan...
- `gamcheon.jpg`：Gamcheon Culture Village，作者 Bernard Gagnon，CC0
- `yonggungsa.jpg`：Haedong Yonggungsa，作者 midnight.here，CC BY-SA 2.0
- `haeundae-night.png`：Haeundae Skyline at Night，作者 Jinho Jung，CC BY-SA 2.0

旅行後可用自己的照片替換這些示意素材。
