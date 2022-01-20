import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import iconDefault from '../../assets/default.png';

export default function TaskCard({ done }) {
    return (
        <TouchableOpacity style={[styles.card, done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive} />
                <Text style={styles.cardTitle} > Fazer Relatório </Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate} > 20/01/2022 </Text>
                <Text style={styles.cardTime} > 17:00 </Text>
            </View>
        </TouchableOpacity>
    )
}