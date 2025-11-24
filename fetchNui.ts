/**
 * ฟังก์ชันสำหรับยิง request ไปหา RegisterNUICallback
 * @param eventName ชื่อ callback event
 * @param data ข้อมูลที่ต้องการส่ง
 * @param resourceName ชื่อ resource (ค่า default: CM_Inventory)
 */
export const fetchNui = async <T = any, R = any>(
  eventName: string,
  data: T = {} as T,
  resourceName = "CM_Inventory" // อย่าลืมเปลี่ยนชื่อ Resource 
): Promise<R | null> => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  try {
    const resp = await fetch(`https://${resourceName}/${eventName}`, options);
    return await resp.json();
  } catch (error) {
    return null; // กรณี dev mode ไม่มี FiveM
  }
};
