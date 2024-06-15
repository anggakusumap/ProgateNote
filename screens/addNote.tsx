import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

interface AddButtonProps {
    setCurrentPage: (page: string) => void,
    addNote: (title: string, note: string) => void
}

const AddNote = ({ setCurrentPage, addNote }: AddButtonProps) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Tambahkan Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label="Judul"
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label="Deskripsi"
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="#fff"
                    text="Simpan"
                    onPress={() => {
                        addNote(title, desc)
                        setCurrentPage('home')
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
})

export default AddNote