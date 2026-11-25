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
    stock: number,   // จำนวนสินค้าที่เหลือ (ตัวเลข)
    category: string, // หมวดหมู่ของสินค้า (ข้อความ)
    image: string    // ลิงก์ URL ของรูปสินค้า (ข้อความ)
}


export default function Card({ id, name, price, stock, category, image }: CardProps) {
    return (
        <View style={cardStyle.box}>

            <Image source={{ uri: image }} style={cardStyle.image} />

            <Text style={cardStyle.name}>{name}</Text>

            <View style={cardStyle.infoBox}>
                <Text style={cardStyle.info}>เหลือ {stock} ชิ้น</Text>
                <Text style={cardStyle.info}>หมวด {category}</Text>
            </View>

            <View style={cardStyle.priceBox}>
                <Text style={cardStyle.price}>{price.toLocaleString()} บาท</Text>
            </View>
        </View>
    )
}


const cardStyle = StyleSheet.create({
    box: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
        gap: 12,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 16,
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        backgroundColor: "#444444"
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff"
    },
    infoBox: {
        alignItems: "flex-end"
    },
    info: {
        color: "#bdbdbd",
        fontSize: 12
    },
    priceBox: {
        backgroundColor: "#e0e0e0",
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    price: {
        color: "#111111",
        fontWeight: "bold"
    }
})
