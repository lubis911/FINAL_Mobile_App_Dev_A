import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TicketIcon from '../../assets/ticket.svg';
import HomeIcon from '../../assets/home.svg';
import SettingsIcon from '../../assets/settings.svg';

export default function CarWashScreen() {
    const [activeTab, setActiveTab] = useState<'ticket' | 'home' | 'settings'>('home');
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBg} />
      <Image style={styles.headerImg} source={{ uri: 'https://placehold.co/393x59' }} />
      <Image style={styles.avatar} source={require('../../assets/user-avatar.png')} />
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.hi}>Hi, Eden</Text>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Discount Card */}
        <View style={styles.discountCard}>
          <View style={styles.discountBg1} />
          <View style={styles.discountBg2} />
          <View style={styles.discountBg3} />
          <View style={styles.discountBg4} />
          <View style={styles.discountCircle1} />
          <View style={styles.discountCircle2} />
          <Image style={styles.discountImg1} source={require('../../assets/discount-illustration.gif')} />
          <Image style={styles.discountImg2} source={require('../../assets/price-tag.gif')} />
          <Text style={styles.discountText1}>
            <Text style={{ fontWeight: '400' }}>Buy </Text>
            <Text style={{ fontWeight: '700' }}>now</Text>
            <Text style={{ fontWeight: '400' }}> don't miss out</Text>
          </Text>
          <Text style={styles.discountText2}>
            <Text style={{ fontWeight: '700' }}>Discount</Text>
            <Text style={{ fontWeight: '400' }}> for day only</Text>
          </Text>
          <Text style={styles.discountPercent}>Discount 20%</Text>
        </View>

        {/* Service Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRow}>
          {/* Exterior Wash */}
          <View style={styles.cardWhite}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Exterior Wash</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceRp}>Rp</Text>
                <Text style={styles.priceValue}>20K</Text>
                <Text style={styles.pricePerHour}>/ Hour</Text>
              </View>
              <View style={styles.featuresList}>
                <Text style={styles.feature}>Body wash</Text>
                <Text style={styles.feature}>Glass cleaning</Text>
                <Text style={styles.feature}>Wheel Washing</Text>
                <Text style={styles.feature}>No Drink</Text>
                <Text style={styles.feature}>Standard soap</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookingBtnDark}>
              <Text style={styles.bookingBtnTextLight}>Booking</Text>
            </TouchableOpacity>
            {/* Cheapest Badge */}
            <View style={styles.cheapestBadge}>
              <View style={styles.cheapestBg} />
              <Text style={styles.cheapestText}>Cheapest</Text>
            </View>
          </View>

          {/* Full Detailing */}
          <View style={styles.cardDark}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitleLight}>Full Detailing</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceRpLight}>Rp</Text>
                <Text style={styles.priceValueLight}>250K</Text>
                <Text style={styles.pricePerHourLight}>/ Hour</Text>
              </View>
              <View style={styles.featuresList}>
                <Text style={styles.featureLight}>Exterior wash</Text>
                <Text style={styles.featureLight}>Interior wash</Text>
                <Text style={styles.featureLight}>Engine</Text>
                <Text style={styles.featureLight}>Premium soap</Text>
                <Text style={styles.featureLight}>Free Drink</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookingBtnYellow}>
              <Text style={styles.bookingBtnTextDark}>Booking</Text>
            </TouchableOpacity>
            {/* Recommended Badge */}
            <View style={styles.recommendedBadge}>
              <View style={styles.recommendedBg} />
              <Text style={styles.recommendedText}>Recommended</Text>
            </View>
          </View>

          {/* Interior Wash */}
          <View style={styles.cardWhite}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Interior Wash</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceRp}>Rp</Text>
                <Text style={styles.priceValue}>50K</Text>
                <Text style={styles.pricePerHour}>/ Hour</Text>
              </View>
              <View style={styles.featuresList}>
                <Text style={styles.feature}>Seat washing</Text>
                <Text style={styles.feature}>Item tidying</Text>
                <Text style={styles.feature}>Vacuum cleaner</Text>
                <Text style={styles.feature}>Free Drink</Text>
                <Text style={styles.feature}>Glass wipe</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookingBtnDark}>
              <Text style={styles.bookingBtnTextLight}>Booking</Text>
            </TouchableOpacity>
          </View>

          {/* Engine Cleaning */}
          <View style={styles.cardDark}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitleLight}>Engine Cleaning</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceRpLight}>Rp</Text>
                <Text style={styles.priceValueLight}>150K</Text>
                <Text style={styles.pricePerHourLight}>/ Hour</Text>
              </View>
              <View style={styles.featuresList}>
                <Text style={styles.featureLight}>Inner machine</Text>
                <Text style={styles.featureLight}>Outside machine</Text>
                <Text style={styles.featureLight}>Oil change</Text>
                <Text style={styles.featureLight}>Replace engine coolant</Text>
                <Text style={styles.featureLight}>Check engine</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookingBtnGrey}>
              <Text style={styles.bookingBtnTextDark}>Booking</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
  <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('ticket')}>
    {activeTab === 'ticket' ? (
      <View style={styles.activeIconWrapper}>
        <TicketIcon width={24} height={24} />
      </View>
    ) : (
      <TicketIcon width={24} height={24} />
    )}
    <Text style={activeTab === 'ticket' ? styles.navTextActive : styles.navText}>Ticket</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('home')}>
    {activeTab === 'home' ? (
      <View style={styles.activeIconWrapper}>
        <HomeIcon width={24} height={24} />
      </View>
    ) : (
      <HomeIcon width={24} height={24} />
    )}
    <Text style={activeTab === 'home' ? styles.navTextActive : styles.navText}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('settings')}>
    {activeTab === 'settings' ? (
      <View style={styles.activeIconWrapper}>
        <SettingsIcon width={24} height={24} />
      </View>
    ) : (
      <SettingsIcon width={24} height={24} />
    )}
    <Text style={activeTab === 'settings' ? styles.navTextActive : styles.navText}>Settings</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerBg: { position: 'absolute', top: 0, left: 0, width: 393, height: 80, backgroundColor: 'black', zIndex: 1 },
  headerImg: { position: 'absolute', top: 0, left: 0, width: 393, height: 59, zIndex: 2 },
  avatar: { position: 'absolute', top: 24, left: 344, width: 30, height: 30, borderRadius: 15, zIndex: 3 },
  welcome: { position: 'absolute', top: 42, left: 51, color: 'white', fontSize: 13, fontWeight: '700', zIndex: 3 },
  hi: { position: 'absolute', top: 23, left: 51, color: 'white', fontSize: 10, fontWeight: '400', zIndex: 3 },
  scrollContent: { paddingTop: 90, paddingBottom: 100 },
  discountCard: { marginHorizontal: 16, marginBottom: 24, height: 136, borderRadius: 10, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 },
  discountBg1: { position: 'absolute', left: 11, top: 39, width: 197, height: 90, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10 },
  discountBg2: { position: 'absolute', left: 273, top: 40, width: 81, height: 49, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 20 },
  discountBg3: { position: 'absolute', left: 90, top: 86, width: 197, height: 82, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10 },
  discountBg4: { position: 'absolute', left: 20, top: 40, width: 123, height: 120, overflow: 'hidden' },
  discountCircle1: { position: 'absolute', left: 273, top: 16, width: 44, height: 42, backgroundColor: '#D9D9D9', borderRadius: 22, borderWidth: 1, borderColor: 'black' },
  discountCircle2: { position: 'absolute', left: 306, top: 80, width: 38, height: 36, backgroundColor: '#D9D9D9', borderRadius: 19, borderWidth: 1, borderColor: 'black' },
  discountImg1: { position: 'absolute', left: 272, top: 33, width: 68, height: 63 },
  discountImg2: { position: 'absolute', left: 279, top: 136, width: 62, height: 81 },
  discountText1: { position: 'absolute', left: 137, top: 98, width: 114, height: 10, fontSize: 10, color: 'black', textAlign: 'center' },
  discountText2: { position: 'absolute', left: 136, top: 116, width: 113, height: 14, fontSize: 10, color: 'black', textAlign: 'center' },
  discountPercent: { position: 'absolute', left: 132, top: 56, width: 140, height: 20, fontSize: 20, color: '#FFA31A', fontWeight: '600', textAlign: 'center' },
  cardsRow: { flexDirection: 'row', marginTop: 24 },
  cardDark: { width: 314, minHeight: 396, backgroundColor: '#2C2C2C', borderRadius: 10, marginRight: 16, padding: 24, justifyContent: 'space-between', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 },
  cardWhite: { width: 314, minHeight: 396, backgroundColor: '#fff', borderRadius: 10, marginRight: 16, padding: 24, justifyContent: 'space-between', borderWidth: 1, borderColor: '#D9D9D9' },
  cardContent: { flex: 1, alignItems: 'center', marginBottom: 16, },
  cardTitle: { color: '#1E1E1E', fontSize: 24, fontWeight: '600', textAlign: 'center', marginBottom: 8 },
  cardTitleLight: { color: '#F5F5F5', fontSize: 24, fontWeight: '600', textAlign: 'center', marginBottom: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 8 },
  priceRp: { color: '#1E1E1E', fontSize: 24, fontWeight: '700', marginTop: 15 },
  priceValue: { color: '#1E1E1E', fontSize: 48, fontWeight: '700', marginLeft: 2, marginTop: 10},
  pricePerHour: { color: '#1E1E1E', fontSize: 14, fontWeight: '400', marginLeft: 6},
  priceRpLight: { color: '#F5F5F5', fontSize: 24, fontWeight: '700' },
  priceValueLight: { color: '#F5F5F5', fontSize: 48, fontWeight: '700', marginLeft: 2,},
  pricePerHourLight: { color: '#F5F5F5', fontSize: 14, fontWeight: '400', marginLeft: 8 },
  featuresList: { marginTop: 8, alignItems: 'flex-start' },
  feature: { color: '#757575', fontSize: 16, fontWeight: '400', marginBottom: 4 },
  featureLight: { color: '#F5F5F5', fontSize: 16, fontWeight: '400', marginBottom: 4 },
  bookingBtnDark: { backgroundColor: '#2C2C2C', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnYellow: { backgroundColor: '#F4B538', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnGrey: { backgroundColor: '#E3E3E3', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnTextLight: { color: '#F5F5F5', fontSize: 16, fontWeight: '700' },
  bookingBtnTextDark: { color: '#1E1E1E', fontSize: 16, fontWeight: '700' },
  cheapestBadge: { position: 'absolute', left: 179, top: -17, width: 157, height: 128, alignItems: 'flex-end', justifyContent: 'flex-start' },
  cheapestBg: { width: 136, height: 126, backgroundColor: '#FF5959', borderRadius: 10, position: 'absolute', left: 21, top: 0, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  cheapestText: { position: 'absolute', left: 101, top: 16, color: 'white', fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }] },
  recommendedBadge: { position: 'absolute', left: 867, top: -18, width: 157, height: 128, alignItems: 'flex-end', justifyContent: 'flex-start' },
  recommendedBg: { width: 136, height: 126, backgroundColor: '#757575', borderRadius: 10, position: 'absolute', left: 21, top: 0, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  recommendedText: { position: 'absolute', left: 107, top: 2, color: 'white', fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }] },
  bottomNav: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 80,
  flexDirection: 'row',
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'space-around',
},
navItem: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
},
activeIconWrapper: {
  backgroundColor: '#F4B538',
  borderRadius: 24, // setengah dari (padding*2 + icon size)
  padding: 12,
  marginBottom: 2,
  marginTop: 2,
  alignItems: 'center',
  justifyContent: 'center',
},
navText: {
  color: 'white',
  fontSize: 12,
  fontWeight: '500',
  letterSpacing: 0.5,
  marginTop: 4,
},
navTextActive: {
  color: 'black',
  fontSize: 12,
  fontWeight: '500',
  letterSpacing: 0.5,
  marginTop: 4,
},
activeIconWrapper: {
  backgroundColor: '#F4B538',
  borderRadius: 20,
  padding: 12, // agar icon berada di tengah background bulat
  marginBottom: 2,
  marginTop: 2,
},
menuIcon: {
    padding: 5,
},
menuIconText: {
    fontSize: 22,
    color: 'white',
},
});