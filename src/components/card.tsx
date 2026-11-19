// ===== ส่วนที่ 1: import (ดึงของที่ต้องใช้เข้ามาในไฟล์นี้) =====

// ดึง component สำเร็จรูปของ React Native มาใช้
// - Image      : แสดงรูปภาพ
// - StyleSheet : ใช้สร้างชุด style (สี ขนาด ขอบ ฯลฯ) ไว้ด้านล่างของไฟล์
// - Text       : แสดงข้อความ (ใน React Native ข้อความต้องอยู่ใน <Text> เสมอ)
// - View       : กล่องเปล่าๆ ไว้จัดวาง component อื่นๆ (เหมือน <div> ในเว็บ)
import { Image, StyleSheet, Text, View } from 'react-native'


// ===== ส่วนที่ 2: กำหนดชนิดของ props =====

// props คือข้อมูลที่ไฟล์แม่ (index.tsx) ส่งเข้ามาให้ Card
// type CardProps บอกว่า Card จะรับข้อมูลอะไรบ้าง และแต่ละตัวเป็นชนิดอะไร
// (ใช้ TypeScript ช่วยตรวจ ถ้าส่งข้อมูลผิดชนิดหรือส่งไม่ครบ จะขึ้น error ทันที)
type CardProps = {
    id: number,      // รหัสสินค้า (ตัวเลข)
    name: string,    // ชื่อสินค้า (ข้อความ)
    price: number,   // ราคาสินค้า (ตัวเลข)
    image: string    // ลิงก์ URL ของรูปสินค้า (ข้อความ)
}


// ===== ส่วนที่ 3: ตัว Card (Custom Component) =====

// Custom Component คือ component ที่เราสร้างเอง เพื่อแยกหน้าตาของ "สินค้า 1 ชิ้น" ออกมา
// แล้วเอาไปใช้ซ้ำได้หลายครั้ง (index.tsx เรียกใช้ <Card /> ซ้ำ 1 ครั้งต่อสินค้า 1 ชิ้น)
// { id, name, price, image } คือการดึงค่าออกมาจาก props ตรงๆ
// ส่วน : CardProps คือการบอกว่า props หน้าตาตามที่กำหนดไว้ข้างบน
export default function Card({ id, name, price, image }: CardProps) {
    return (
        // กล่องของการ์ดทั้งใบ จัดของข้างในเรียงเป็นแถว (ซ้ายไปขวา) ตาม style box
        <View style={cardStyle.box}>

            {/* รูปสินค้า (ซ้ายสุด)
                source={{ uri: image }} คือโหลดรูปจากลิงก์อินเทอร์เน็ต
                ต้องเขียนเป็น object ที่มี uri เสมอ ถ้าเป็นรูปในเครื่องจะใช้ require แทน */}
            <Image source={{ uri: image }} style={cardStyle.image} />

            {/* ชื่อสินค้า (ตรงกลาง) แสดงค่า name ที่ได้รับมาจาก props
                ใช้ปีกกา {} เพื่อแทรกค่าตัวแปรลงในข้อความ */}
            <Text style={cardStyle.name}>{name}</Text>

            {/* กล่องป้ายราคา (ขวาสุด) มีพื้นหลังสีต่างจากการ์ดเพื่อให้เด่น */}
            <View style={cardStyle.priceBox}>
                {/* price.toLocaleString() ใส่เครื่องหมายคั่นหลักพันให้ เช่น 2000 เป็น 2,000
                    แล้วต่อด้วยคำว่า บาท */}
                <Text style={cardStyle.price}>{price.toLocaleString()} บาท</Text>
            </View>
        </View>
    )
}


// ===== ส่วนที่ 4: style (ตกแต่งหน้าตา) =====

// StyleSheet.create รวม style ไว้เป็นชุด เรียกใช้ด้วย cardStyle.ชื่อ
const cardStyle = StyleSheet.create({
    // style ของกล่องการ์ดทั้งใบ
    box: {
        flexDirection: "row",          // เรียงของข้างในเป็นแถว (รูป ชื่อ ราคา อยู่ในแนวนอน)
        alignItems: "center",          // จัดของข้างในให้อยู่กึ่งกลางในแนวตั้ง
        backgroundColor: "#2a2a2a",    // สีพื้นหลังการ์ด (เทาเข้ม)
        gap: 12,                       // ระยะห่างระหว่างของข้างใน (รูป ชื่อ ราคา)
        marginHorizontal: 10,          // ระยะห่างจากขอบจอด้านซ้ายและขวา
        marginBottom: 10,              // ระยะห่างระหว่างการ์ดใบนี้กับใบถัดไปด้านล่าง
        borderRadius: 16,              // ความโค้งของมุมการ์ด
        padding: 10                    // ระยะห่างระหว่างขอบการ์ดกับของข้างใน
    },
    // style ของรูปสินค้า
    image: {
        width: 80,                     // ความกว้างรูป
        height: 80,                    // ความสูงรูป (รูปที่ไม่เป็นจัตุรัสจะถูกตัดให้พอดีกรอบ)
        borderRadius: 12,              // ความโค้งของมุมรูป
        backgroundColor: "#444444"     // สีพื้นหลังรูป (เห็นระหว่างรอโหลดรูป)
    },
    // style ของชื่อสินค้า
    name: {
        flex: 1,                       // ให้ชื่อขยายกินที่ว่างที่เหลือ ทำให้ราคาถูกดันไปชิดขวา
        fontSize: 18,                  // ขนาดตัวอักษร
        fontWeight: "bold",            // ตัวหนา
        color: "#ffffff"               // สีตัวอักษร (ขาว)
    },
    // style ของกล่องป้ายราคา
    priceBox: {
        backgroundColor: "#e0e0e0",    // สีพื้นหลังป้าย (เทาอ่อน)
        borderRadius: 12,              // ความโค้งของมุมป้าย
        paddingVertical: 6,            // ระยะห่างข้างในแนวตั้ง (บนและล่าง)
        paddingHorizontal: 10          // ระยะห่างข้างในแนวนอน (ซ้ายและขวา)
    },
    // style ของข้อความราคา
    price: {
        color: "#111111",              // สีตัวอักษร (ดำ) ให้ตัดกับพื้นป้ายสีอ่อน
        fontWeight: "bold"             // ตัวหนา
    }
})
