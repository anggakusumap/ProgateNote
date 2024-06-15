import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

interface EditNoteProps {
    setCurrentPage: (page: string) => void;
    editNote: (id: number, title: string, desc: string) => void;
    selectedNote: { id: number; title: string; desc: string } | null;
}

const EditNote = ({ setCurrentPage, editNote, selectedNote }: EditNoteProps) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        if (selectedNote)
        {
            setTitle(selectedNote.title);
            setDesc(selectedNote.desc);
        }
    }, [selectedNote]);

    if (!selectedNote)
    {
        return (
            <View style={styles.container}>
                <Text style={styles.pageTitle}>Tidak ada note yang dipilih</Text>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke home"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label="Title"
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label="Description"
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="#fff"
                    text="Simpan"
                    onPress={() => {
                        editNote(selectedNote.id, title, desc);
                        setCurrentPage('home');
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke home"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    );
};

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
});

export default EditNote;
