import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#0D0D0D',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#595959',
        marginBottom: 16,
        marginTop: 30,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#DEDEDE',
    },

    contactBox: {
        padding: 22,
        borderRadius: 12,
        backgroundColor: '#595959',
        marginBottom: 16,
    },

    heroeTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#DEDEDE',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 10,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },


});