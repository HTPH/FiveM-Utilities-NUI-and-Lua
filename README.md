# 🚀 FiveM NUI ↔ Lua
ชุดเครื่องมือสำหรับช่วยเชื่อมต่อ **NUI ↔ Lua** ใน FiveM ใช้งานง่าย ปลอดภัย และรองรับ React/Next.js

---

## ✨ Features
- รองรับ TypeScript เต็มรูปแบบ
- ฟัง event จาก `SendNUIMessage` ได้ง่ายด้วย Hook
- ส่งข้อมูลไปหา `RegisterNUICallback` ด้วยฟังก์ชันที่อ่านง่าย
- ปลอดภัยจาก stale handler ด้วย `useRef`

---



## 📘 Usage
### 🟦 0. Setup ติดตั้งใช้งาน 
```ts
import { useNuiEvent } from "./utils/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";
```

### 🟦 1. รับข้อมูลจาก Lua (SendNUIMessage)
```ts
useNuiEvent("SHOW", (data) => {
  setVisible(true);
  setData(data);
});
```

### 🟧 2. ส่งข้อมูลไปหา Lua (RegisterNUICallback)
```ts
const send = async () => {
  const resp = await fetchNui("onUse", { item: "water" });
  console.log(resp);
};
```

---

## 🛠 Lua Example
```lua
SendNUIMessage({ action = "SHOW", data = { test = true } })

RegisterNUICallback("onUse", function(data, cb)
    print("ใช้ item:", data.item)
    cb({ ok = true })
end)
```

---

## 📄 License
MIT

