import { useEffect, useRef } from "react";

/**
 * Hook สำหรับรับ Event จาก FiveM NUI ผ่าน window.message
 * @param action ชื่อ action ที่ต้องการรับ (ต้องตรงกับ SendNUIMessage)
 * @param handler ฟังก์ชัน callback เมื่อได้รับ event
 */
export const useNuiEvent = <T = any>(
  action: string,
  handler: (data: T) => void
) => {
  const savedHandler = useRef<(data: T) => void>();

  // จดจำ handler ล่าสุดเสมอ
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent) => {
      const { action: eventAction, data } = event.data || {};

      // ถ้า action ตรงกัน เรียก handler
      if (savedHandler.current && eventAction === action) {
        savedHandler.current(data);
      }
    };

    window.addEventListener("message", eventListener);
    return () => window.removeEventListener("message", eventListener);
  }, [action]);
};
