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
2. 在 `index.html` 的 `#photo-journal` 或 `#album` 區段，把圖片路徑改成 `photos/day-1-beach.jpg`。
3. 建議先將照片縮至長邊 2000px 以下，避免 GitHub Pages 載入過慢。

網站的「照片專區」也可直接選擇本機照片預覽。預覽只存在目前瀏覽器頁面，不會上傳或永久保存。

## 皮膚與輪廓醫美規劃

- 安排於第 5 天上午，保留後續休息與觀察時間。
- 諮詢主題包括痘印、膚色不均／提亮與臉型困擾；先判斷原因，不預設療程。
- 痘印需先區分色素、泛紅或凹疤；臉型需區分肌肉、脂肪、骨骼、鬆弛或水腫。
- 規劃以合格醫師面診與諮詢為優先，不預設一定施作。
- 需要較長恢復期、多次治療或密集追蹤的療程，旅行期間傾向只諮詢、回國後再做。
- 診所、產品、個人適應症與術後照護必須由合格醫療人員確認。
- 若出現吞嚥困難、呼吸困難、說話不清或全身明顯無力，應立即就醫。

參考：

- [韓國觀光公社 Medical Tourism Business Center](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=612&vcontsId=147642)
- [CDC：How to Stay Safe When Getting Botulinum Toxin Injections](https://www.cdc.gov/botulism/prevention/botulinum-toxin-injections.html)

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
