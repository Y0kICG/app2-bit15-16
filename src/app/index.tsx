import { FlatList, StyleSheet, Text, View } from 'react-native'

import products from '../products.json'


import Card from '@/components/card'



export default function App(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>รายการสินค้า</Text>
      </View>

      {/* FlatList: วนลูปข้อมูลใน array แล้วสร้างหน้าจอให้ทีละรายการ
          ข้อดีคือแสดงเฉพาะรายการที่อยู่บนจอ จึงเร็วและประหยัดแรม
          และเลื่อนดูรายการที่เหลือได้เอง */}
      <FlatList
      // data = ข้อมูลที่จะเอามาแสดง ต้องเป็น array
      // ตรงนี้ส่ง products (10 ชิ้นจากไฟล์ JSON) เข้าไป
      data={products}

      // keyExtractor = บอก FlatList ว่าจะใช้ค่าอะไรเป็น "คีย์" ประจำแต่ละรายการ
      // คีย์ต้องไม่ซ้ำกัน React ใช้แยกว่ารายการไหนคือรายการไหน เวลาข้อมูลเปลี่ยนจะได้อัปเดตถูกตัว
      // เราใช้ id ของสินค้า และต้องแปลงเป็นข้อความด้วย .toString() เพราะคีย์ต้องเป็น string
      keyExtractor={(item) => item.id.toString()}

      // renderItem = บอกว่า "แต่ละรายการ" จะให้แสดงหน้าตาเป็นอย่างไร
      // FlatList จะเรียกฟังก์ชันนี้ซ้ำ 1 ครั้งต่อสินค้า 1 ชิ้น
      // โดยส่งสินค้าชิ้นนั้นมาในตัวแปร item (เช่น item.name, item.price)
      renderItem={({item}) => (
        // สร้างการ์ด 1 ใบ แล้วส่งข้อมูลของสินค้าเข้าไปทาง props
        // ฝั่ง card.tsx จะรับ id, name, price, image ไปแสดงผล
        <Card id={item.id} name={item.name} price={item.price} image={item.image} />
      )}

      />
    </View>
  )
}


// ===== ส่วนที่ 3: style (ตกแต่งหน้าตา) =====

// StyleSheet.create รวม style ไว้เป็นชุด เรียกใช้ด้วย styles.ชื่อ
const styles = StyleSheet.create({
  // style ของกล่องนอกสุด
  container: {
    flex: 1,                     // ให้ขยายเต็มพื้นที่จอ (ทำให้ FlatList เลื่อนได้)
    backgroundColor: '#121212'   // สีพื้นหลังของทั้งหน้า (ดำ)
  },
  // style ของกล่องหัวข้อ
  header: {
    backgroundColor: '#333333',  // สีพื้นหลังกล่อง (เทาเข้ม)
    margin: 10,                  // ระยะห่างระหว่างกล่องกับขอบจอ/ของข้างนอก
    padding: 16,                 // ระยะห่างระหว่างขอบกล่องกับข้อความข้างใน
    borderRadius: 16             // ความโค้งของมุมกล่อง
  },
  // style ของข้อความหัวข้อ
  title: {
    fontSize: 24,                // ขนาดตัวอักษร
    fontWeight: 'bold',          // ตัวหนา
    textAlign: 'center',         // จัดข้อความไว้ตรงกลาง
    color: '#ffffff'             // สีตัวอักษร (ขาว)
  }
})
