import { Image, StyleSheet, Text, View } from 'react-native'

type CardProps = {
    id: number,
    name: string,
    price: number,
    image: string
}

export default function Card({ id, name, price, image }: CardProps) {
    return (
        <View style={cardStyle.box}>
            <Image source={{ uri: image }} style={cardStyle.image} />
            <Text style={cardStyle.name}>{name}</Text>
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
