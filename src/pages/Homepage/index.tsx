import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import TicketIcon from '../../assets/ticket.svg';
import HomeIcon from '../../assets/home.svg';
import SettingsIcon from '../../assets/settings.svg';
import IconCar from '../../assets/icon_car.svg';
import IconMotor from '../../assets/icon_motorcycle.svg';
import IconTruck from '../../assets/icon_truck.svg';
import IconDate from '../../assets/icon_data-date.svg';
import IconJam from '../../assets/icon_clock.svg';
import SpeedCar from '../../assets/speed_car.svg';

// import logo payment
import BRI from '../../assets/logo_payment/BRI.svg';
import BCA from '../../assets/logo_payment/bca.svg';
import Mandiri from '../../assets/logo_payment/mandiri.svg';
import Paypal from '../../assets/logo_payment/paypal.svg';
import OVO from '../../assets/logo_payment/ovo.svg';
import DANA from '../../assets/logo_payment/dana.svg';


export default function CarWashScreen() {
    const [activeTab, setActiveTab] = useState<'ticket' | 'home' | 'settings'>('home');
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(0);
    const [showWaitingPayment, setShowWaitingPayment] = useState(false);

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
          <View style={styles.discountCircle3} />
          <Image style={styles.discountImg1} source={require('../../assets/discount-illustration.gif')} />
          <Image style={styles.discountImg2} source={require('../../assets/price-tag.gif')} />
          <Image style={styles.digitalAd} source={require('../../assets/digitalads.png')} />
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
                <Text style={styles.feature}>• Body wash</Text>
                <Text style={styles.feature}>• Glass cleaning</Text>
                <Text style={styles.feature}>• Wheel Washing</Text>
                <Text style={styles.feature}>• No Drink</Text>
                <Text style={styles.feature}>• Standard soap</Text>
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
                <Text style={styles.featureLight}>• Exterior wash</Text>
                <Text style={styles.featureLight}>• Interior wash</Text>
                <Text style={styles.featureLight}>• Engine</Text>
                <Text style={styles.featureLight}>• Premium soap</Text>
                <Text style={styles.featureLight}>• Free Drink</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.bookingBtnYellow}
              onPress={() => setShowOrderModal(true)} // Buka modal saat Booking ditekan
            >
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
                <Text style={styles.feature}>• Seat washing</Text>
                <Text style={styles.feature}>• Item tidying</Text>
                <Text style={styles.feature}>• Vacuum cleaner</Text>
                <Text style={styles.feature}>• Free Drink</Text>
                <Text style={styles.feature}>• Glass wipe</Text>
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
                <Text style={styles.featureLight}>• Inner machine</Text>
                <Text style={styles.featureLight}>• Outside machine</Text>
                <Text style={styles.featureLight}>• Oil change</Text>
                <Text style={styles.featureLight}>• Replace engine coolant</Text>
                <Text style={styles.featureLight}>• Check engine</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookingBtnGrey}>
              <Text style={styles.bookingBtnTextDark}>Booking</Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </ScrollView>

      {showWaitingPayment && (
  <View style={styles.waitingContainer}>
    {/* Header */}
    <Text style={styles.waitingTitle}>Waiting for payment</Text>
    {/* Icon Besar */}
    <View style={styles.waitingIconBox}>
      {/* Ganti dengan logo SVG sesuai kebutuhan */}
      <BCA width={38} height={26} />
    </View>
    {/* Nama Bank */}
    <Text style={styles.waitingBankName}>Bank Central Asia</Text>
    {/* Virtual Account Box */}
    <View style={styles.vaBox}>
      <Text style={styles.vaNumber}>0881 0581 0501 8508 5</Text>
      <TouchableOpacity>
        <Text style={styles.copyText}>Copy</Text>
      </TouchableOpacity>
    </View>
    {/* Expired Timer */}
    <View style={styles.expiredRow}>
      <Text style={styles.expiredLabel}>Invoice will be expired in: </Text>
      <Text style={styles.expiredTime}>23:59</Text>
    </View>
    {/* Info */}
    <Text style={styles.waitingInfo}>
      Make a payment based on the virtual bca account listed, if you have made a payment please wait a few minutes until you are redirected to a new page automatically.
    </Text>
    <Text style={styles.waitingInfo2}>
      Ambil tangkapan layar halaman ini atau catat kode pembayaran Anda untuk ditunjukkan ke kasir. Anda dapat menemukan halaman ini kapan pun di aplikasi Carwash, dengan membukan menu tiket
    </Text>
    {/* Cara Pembayaran */}
    <View style={styles.caraBox}>
      <Text style={styles.caraTitle}>Cara Pembayaran E-commerce dengan Virtual Account Melalui Aplikasi myBCA</Text>
      <Text style={styles.caraStep}>
        {'\n'}Login ke myBCA
        {'\n'}Pilih Transfer dan pilih Virtual Account
        {'\n'}Pilih Transfer ke tujuan baru
        {'\n'}Masukkan nomor Virtual Account dari e-commerce dan klik Lanjut
        {'\n'}Pilih rekening sumber dana (jika memiliki lebih dari satu), masukkan nominal dan klik Lanjut
        {'\n'}Cek detail transaksi, klik Lanjut
        {'\n'}Masukkan PIN dan transaksi berhasil
      </Text>

      
    </View>
  </View>
)}


      
      {/* Modal Overlay New Order */}
        <Modal
          visible={showOrderModal}
          animationType="slide"
          transparent
          onRequestClose={() => setShowOrderModal(false)}
        >
          <View style={styles.overlayBg}>
            <View style={styles.orderModal}>
              {/* Header */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Text style={{ fontSize: 28, fontWeight: '700', color: 'black', fontFamily: 'Century Gothic' }}>New order</Text>
                <Pressable onPress={() => setShowOrderModal(false)}>
                  <Text style={{ fontSize: 24, color: '#1E1E1E' }}>×</Text>
                </Pressable>
              </View>
              {/* Pilihan kendaraan */}
              <Text style={{ fontSize: 15, color: 'black', marginBottom: 8 }}>Choose the vehicle to be washed</Text>
              <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                {[IconCar, IconMotor, IconTruck].map((IconComponent, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setSelectedVehicle(idx)}
                  style={[
                    styles.vehicleBox,
                    idx === 0 && { marginRight: 8 },
                    idx === 1 && { marginHorizontal: 8 },
                    idx === 2 && { marginLeft: 8 },
                    {
                      backgroundColor: selectedVehicle === idx ? '#F8E8C8' : 'white',
                      borderColor: '#B3B3B3',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}
                >
                  <IconComponent width={40} height={40} />
                </TouchableOpacity>
              ))}
              </View>
              {/* Set tanggal */}
              <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Set the washing date</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <IconDate width={32} height={32} style={{ marginRight: 8 }} />
                <Text style={{ fontSize: 14, color: 'black' }}>Monday, 30 Nov 2024</Text>
                <TouchableOpacity style={styles.setBtn}><Text style={{ fontSize: 11 }}>Set</Text></TouchableOpacity>
              </View>
              {/* Set waktu */}
              <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Set the time</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <IconJam width={32} height={32} style={{ marginRight: 8 }} />
                <Text style={{ fontSize: 14, color: 'black' }}>03:00 PM</Text>
                <TouchableOpacity style={styles.setBtn}><Text style={{ fontSize: 11 }}>Set</Text></TouchableOpacity>
              </View>
              {/* Jumlah kendaraan */}
              <Text style={{ fontSize: 15, color: 'black', marginBottom: 4 }}>Number of vehicles</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                <TouchableOpacity style={styles.counterBtn}><Text style={{ fontSize: 18 }}>-</Text></TouchableOpacity>
                <Text style={{ fontSize: 15, marginHorizontal: 16 }}>1</Text>
                <TouchableOpacity style={styles.counterBtn}><Text style={{ fontSize: 18 }}>+</Text></TouchableOpacity>
              </View>
              {/* Garis */}
              <View style={{ height: 1, backgroundColor: '#575757', marginVertical: 12 }} />
              {/* Total */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                <Text style={{ fontSize: 25, color: '#575757', fontWeight: '700', fontFamily: 'Century Gothic' }}>Total :</Text>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: '700', fontFamily: 'Century Gothic', marginLeft: 8 }}>Rp. 250.000</Text>
              </View>
              {/* Deskripsi */}
              <Text style={{ fontSize: 15, color: 'black', marginBottom: 16, textAlign: 'center' }}>
                Once you order, then our service will never disappoint, believe and trust us.
              </Text>
              {/* Tombol Continue */}
              <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                setShowOrderModal(false);
                setShowPaymentModal(true); // Buka modal pembayaran
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Continue</Text>
            </TouchableOpacity>
            
            </View>
          </View>
        </Modal>
      {/* Modal Overlay New Order */}


      {/* Modal Overlay Payment Method */}
      <Modal
  visible={showPaymentModal}
  animationType="slide"
  transparent={false}
  onRequestClose={() => setShowPaymentModal(false)}
>
  <View style={styles.paymentFullScreen}>
    {/* Header */}
    <Text style={styles.paymentHeader}>Choose Payment Method</Text>
    <Text style={styles.paymentDesc}>
      Payment method appear, only receive payment{'\n'}from indonesia
    </Text>
    <ScrollView contentContainerStyle={styles.paymentOptions}>
      {/* Bank & Paypal */}
      {[
        { label: 'Virtual BCA', Icon: BCA, onPress: () => {
            setShowPaymentModal(false);
            setShowWaitingPayment(true);
          } 
        },
        { label: 'Virtual BRI', Icon: BRI },
        { label: 'Virtual Mandiri', Icon: Mandiri },
        { label: 'Paypal', Icon: Paypal },
      ].map(({ label, Icon, onPress }) => (
        <TouchableOpacity
          key={label}
          style={styles.paymentOptionBox}
          onPress={onPress}
          activeOpacity={onPress ? 0.7 : 1}
        >
          <Icon width={36} height={36} style={{ marginRight: 16 }} />
          <Text style={styles.paymentOptionText}>{label}</Text>
        </TouchableOpacity>
      ))}
      {/* Garis pemisah dan E-Wallet Payment */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
        <Text style={styles.ewalletDividerText}>E-Wallet Payment</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
      </View>
      {/* E-Wallets */}
      {[
        { label: 'OVO', Icon: OVO },
        { label: 'DANA', Icon: DANA },
      ].map(({ label, Icon }) => (
        <View key={label} style={styles.paymentOptionBox}>
          <Icon width={36} height={36} style={{ marginRight: 16 }} />
          <Text style={styles.paymentOptionText}>{label}</Text>
        </View>
      ))}
    </ScrollView>
    {/* Tombol Back */}
    <TouchableOpacity
      style={styles.paymentBackBtn}
      onPress={() => setShowPaymentModal(false)}
    >
      <Text style={styles.paymentBackText}>Back</Text>
    </TouchableOpacity>
  </View>
</Modal>


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
  discountBg1: { position: 'absolute', left: 11, top: 18, width: 197, height: 90, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10 },
  discountBg2: { position: 'absolute', left: 273, top: 40, width: 81, height: 49, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 20 },
  discountBg3: { position: 'absolute', left: 90, top: 53, width: 197, height: 82, backgroundColor: 'rgba(255,163,26,0.17)', borderRadius: 10 },
  discountBg4: { position: 'absolute', left: 20, top: 40, width: 123, height: 120, overflow: 'hidden' },
  discountCircle1: { position: 'absolute', left: 273, top: 16, width: 44, height: 42, backgroundColor: '#D9D9D9', borderRadius: 22, borderWidth: 1, borderColor: 'black' },
  discountCircle2: { position: 'absolute', left: 306, top: 80, width: 38, height: 36, backgroundColor: '#D9D9D9', borderRadius: 19, borderWidth: 1, borderColor: 'black' },
  discountCircle3: { position: 'absolute', left: 270, top: 103, width: 38, height: 36, backgroundColor: '#D9D9D9', borderRadius: 19, borderWidth: 1, borderColor: 'black' },
  discountImg1: { position: 'absolute', left: 272, top: 33, width: 68, height: 63 },
  discountImg2: { position: 'absolute', left: 279, top: 110, width: 62, height: 81 },
  digitalAd: { position: 'absolute', left: 20, width: 120, height: 136},
  discountText1: { position: 'absolute', left: 137, top: 70, width: 114, height: 15, fontSize: 10, color: 'black', textAlign: 'center' },
  discountText2: { position: 'absolute', left: 136, top: 90, width: 113, height: 14, fontSize: 10, color: 'black', textAlign: 'center' },
  discountPercent: { position: 'absolute', left: 132, top: 23, width: 140, height: 25, fontSize: 20, color: '#FFA31A', fontWeight: '600', textAlign: 'center' },
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
  priceRpLight: { color: '#F5F5F5', fontSize: 24, fontWeight: '700', marginTop: 15 },
  priceValueLight: { color: '#F5F5F5', fontSize: 48, fontWeight: '700', marginLeft: 2,},
  pricePerHourLight: { color: '#F5F5F5', fontSize: 14, fontWeight: '400', marginLeft: 8 },
  featuresList: { marginTop: 8, alignItems: 'flex-start' },
  feature: { color: '#757575', fontSize: 16, fontWeight: '400', marginBottom: 8, lineHeight: 24, textAlign: 'left'},
  featureLight: { color: '#F5F5F5', fontSize: 16, fontWeight: '400', marginBottom: 8, lineHeight: 24, textAlign: 'left'},
  bookingBtnDark: { backgroundColor: '#2C2C2C', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnYellow: { backgroundColor: '#F4B538', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnGrey: { backgroundColor: '#E3E3E3', borderRadius: 8, padding: 12, alignItems: 'center', marginTop: 16 },
  bookingBtnTextLight: { color: '#F5F5F5', fontSize: 16, fontWeight: '700' },
  bookingBtnTextDark: { color: '#1E1E1E', fontSize: 16, fontWeight: '700' },
  cheapestBadge: { position: 'absolute', left: 179, top: -17, width: 157, height: 128, alignItems: 'flex-end', justifyContent: 'flex-start' },
  cheapestBg: { width: 150, height: 80, backgroundColor: '#FF5959', borderRadius: 0, position: 'absolute', left: 21, top: 0, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, transform: [{ rotate: '45deg' }] },
  cheapestText: { position: 'absolute', left: 79, top: 40, color: 'white', fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }] },
  recommendedBadge: { position: 'absolute', left: 867, top: -18, width: 157, height: 128, alignItems: 'flex-end', justifyContent: 'flex-start' },
  recommendedBg: { width: 136, height: 126, backgroundColor: '#757575', borderRadius: 10, position: 'absolute', left: 21, top: 0, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  recommendedText: { position: 'absolute', left: 107, top: 2, color: 'white', fontSize: 14, fontWeight: '700', transform: [{ rotate: '45deg' }] },
  overlayBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderModal: {
    width: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#575757',
    elevation: 10,
  },
  vehicleBox: {
    width: 94,
    height: 84,
    borderRadius: 10,
    borderWidth: 1,
  },
  setBtn: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginLeft: 8,
  },
  counterBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#757575',
  },
  continueBtn: {
    backgroundColor: '#FFA31A',
    borderRadius: 20,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  
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

paymentFullScreen: {
  flex: 1,
  backgroundColor: 'white',
  paddingTop: 48,
  paddingHorizontal: 18,
},
paymentHeader: {
  fontSize: 28,
  fontWeight: '700',
  color: 'black',
  fontFamily: 'Century Gothic',
  marginBottom: 12,
  textAlign: 'center',
},
paymentDesc: {
  color: 'black',
  fontSize: 15,
  fontFamily: 'Inter',
  fontWeight: '400',
  marginBottom: 24,
  textAlign: 'center',
},
paymentOptions: {
  paddingBottom: 100,
},
paymentOptionBox: {
  width: '100%',
  height: 51,
  backgroundColor: 'white',
  borderRadius: 15,
  borderWidth: 1,
  borderColor: 'rgba(110,109,109,0.58)',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 18,
  paddingLeft: 24,
},
paymentOptionText: {
  color: '#575757',
  fontSize: 15,
  fontFamily: 'Inter',
  fontWeight: '400',
},
ewalletBox: {
  width: '100%',
  height: 24,
  backgroundColor: 'white',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 12,
  marginBottom: 24,
},
ewalletText: {
  color: 'black',
  fontSize: 14,
  fontFamily: 'Inter',
  fontWeight: '400',
},
paymentBackBtn: {
  position: 'absolute',
  bottom: 32,
  right: 24,
  width: 102,
  height: 42,
  backgroundColor: '#FFA31A',
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
paymentBackText: {
  color: 'white',
  fontSize: 18,
  fontWeight: '700',
  fontFamily: 'Century Gothic',
},
ewalletDividerText: {
  marginHorizontal: 12,
  color: '#575757',
  fontSize: 15,
  fontFamily: 'Inter',
  fontWeight: '700',
  textAlign: 'center',
  backgroundColor: 'white',
  paddingHorizontal: 8,
},
waitingContainer: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
  paddingTop: 60,
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  zIndex: 99,
},
waitingTitle: {
  fontSize: 28,
  fontWeight: '700',
  fontFamily: 'Century Gothic',
  textAlign: 'center',
  marginBottom: 24,
},
waitingIconBox: {
  alignSelf: 'center',
  marginBottom: 12,
},
waitingBankName: {
  textAlign: 'center',
  fontSize: 15,
  fontFamily: 'Inter',
  fontWeight: '400',
  marginBottom: 8,
},
vaBox: {
  backgroundColor: '#fff',
  borderRadius: 20,
  elevation: 2,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  marginVertical: 8,
  padding: 16,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
},
vaNumber: {
  fontSize: 12,
  fontFamily: 'Inter',
  fontWeight: '400',
  color: 'black',
  marginRight: 16,
},
copyText: {
  color: 'black',
  fontSize: 10,
  fontFamily: 'Inter',
  fontWeight: '400',
  backgroundColor: '#D9D9D9',
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 2,
},
expiredRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 8,
},
expiredLabel: {
  fontSize: 15,
  fontFamily: 'Inter',
  color: 'black',
},
expiredTime: {
  fontSize: 15,
  fontFamily: 'Inter',
  color: '#F4B538',
  fontWeight: '700',
  marginLeft: 8,
},
waitingInfo: {
  fontSize: 10,
  color: 'black',
  fontFamily: 'Inter',
  textAlign: 'center',
  marginVertical: 8,
},
waitingInfo2: {
  fontSize: 10,
  color: 'black',
  fontFamily: 'Inter',
  textAlign: 'center',
  marginBottom: 8,
},
caraBox: {
  backgroundColor: 'white',
  borderRadius: 20,
  marginTop: 16,
  padding: 12,
  elevation: 1,
},
caraTitle: {
  fontSize: 10,
  fontWeight: '700',
  color: 'black',
  fontFamily: 'Inter',
  marginBottom: 4,
},
caraStep: {
  fontSize: 10,
  color: 'black',
  fontFamily: 'Inter',
},
});