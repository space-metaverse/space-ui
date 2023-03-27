import React from 'react';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

import styled from 'styled-components';

import AccessibilitySVG from './Accessibility.svg';
import AlertSVG from './Alert.svg';
import AlienSVG from './Alien.svg';
import AnalyticsSVG from './Analytics.svg';
import ARSVG from './AR.svg';
import ArrangeSVG from './Arrange.svg';
import ArrowBackUpSVG from './ArrowBackUp.svg';
import ArrowDownSVG from './ArrowDown.svg';
import ArrowLeftSVG from './ArrowLeft.svg';
import ArrowRightSVG from './ArrowRight.svg';
import ArrowUpSVG from './ArrowUp.svg';
import ArtSVG from './Art.svg';
import AvatarSVG from './Avatar.svg';
import AwardSVG from './Award.svg';
import BanSVG from './Ban.svg';
import BillingSVG from './Billing.svg';
import BookmarkSVG from './Bookmark.svg';
import BrushSVG from './Brush.svg';
import BusinessSVG from './Business.svg';
import CameraSVG from './Camera.svg';
import CardSVG from './Card.svg';
import CartSVG from './Cart.svg';
import CheckSVG from './Check.svg';
import CloseSVG from './Close.svg';
import CollectionSVG from './Collection.svg';
import ConcertSVG from './Concert.svg';
import ConnectedWalletsSVG from './ConnectedWallets.svg';
import ConnectNewWalletSVG from './ConnectNewWallet.svg';
import CopySVG from './Copy.svg';
import CryptoSVG from './Crypto.svg';
import DeleteSVG from './Delete.svg';
import DesktopSVG from './Desktop.svg';
import DigitalSVG from './Digital.svg';
import DocumentSVG from './Document.svg';
import DoneSVG from './Done.svg';
import DotsSVG from './Dots.svg';
import DownloadSVG from './Download.svg';
import DragPointSVG from './DragPoint.svg';
import DropDownSVG from './DropDown.svg';
import DropLeftSVG from './DropLeft.svg';
import DropRightSVG from './DropRight.svg';
import DropUpSVG from './DropUp.svg';
import EditSVG from './Edit.svg';
import EmptySVG from './Empty.svg';
import ErrorSVG from './Error.svg';
import EventsSVG from './Events.svg';
import ExternalLinkSVG from './ExternalLink.svg';
import EyeCloseSVG from './EyeClose.svg';
import EyeOpenSVG from './EyeOpen.svg';
import FashionSVG from './Fashion.svg';
import FeedSVG from './Feed.svg';
import FilterSVG from './Filter.svg';
import FriendsSVG from './Friends.svg';
import FriendsAddSVG from './FriendsAdd.svg';
import FriendsListSVG from './FriendsList.svg';
import FriendsRequestsSVG from './FriendsRequests.svg';
import FullscreenSVG from './Fullscreen.svg';
import GhostSVG from './Ghost.svg';
import GoProViewSVG from './GoProView.svg';
import HeartSVG from './Heart.svg';
import HelpSVG from './Help.svg';
import HomeSVG from './Home.svg';
import ImageSVG from './Image.svg';
import InfluenceSVG from './Influence.svg';
import InfoSVG from './Info.svg';
import LabSVG from './Lab.svg';
import LinkSVG from './Link.svg';
import ListIconsSVG from './ListIcons.svg';
import ListLinksSVG from './ListLinks.svg';
import LoginSVG from './Login.svg';
import LogoutSVG from './Logout.svg';
import MediaSVG from './Media.svg';
import MeetupSVG from './Meetup.svg';
import MenuSVG from './Menu.svg';
import MessagesSVG from './Messages.svg';
import MicSVG from './Mic.svg';
import MicOffSVG from './MicOff.svg';
import MinusSVG from './Minus.svg';
import MobileSVG from './Mobile.svg';
import ModelSVG from './Model.svg';
import NFTSVG from './NFT.svg';
import NotificationsSVG from './Notifications.svg';
import OrdersSVG from './Orders.svg';
import OrdersListSVG from './OrdersList.svg';
import PauseSVG from './Pause.svg';
import PenSVG from './Pen.svg';
import PhygitalSVG from './Phygital.svg';
import PhysicalSVG from './Physical.svg';
import PlaySVG from './Play.svg';
import PlusSVG from './Plus.svg';
import ProductCodeSVG from './ProductCode.svg';
import ProductsSVG from './Products.svg';
import ProfileSVG from './Profile.svg';
import PromoteSVG from './Promote.svg';
import QRCodeSVG from './QRCode.svg';
import RefreshSVG from './Refresh.svg';
import RetailSVG from './Retail.svg';
import ReturnAndRefundSVG from './ReturnAndRefund.svg';
import SceneSVG from './Scene.svg';
import ScreenShareSVG from './ScreenShare.svg';
import SearchSVG from './Search.svg';
import SecuritySVG from './Security.svg';
import SelectorSVG from './Selector.svg';
import SendSVG from './Send.svg';
import SettingsSVG from './Settings.svg';
import ShareSVG from './Share.svg';
import ShowSVG from './Show.svg';
import SmileSVG from './Smile.svg';
import SpaceSVG from './Space.svg';
import SpaceCollectionSVG from './SpaceCollection.svg';
import SpacesSVG from './Spaces.svg';
import SportSVG from './Sport.svg';
import StarSVG from './Star.svg';
import SubscriptionSVG from './Subscription.svg';
import SupportSVG from './Support.svg';
import TableSVG from './Table.svg';
import TemplateSVG from './Template.svg';
import TicketSVG from './Ticket.svg';
import TransferSVG from './Transfer.svg';
import UploadSVG from './Upload.svg';
import UserSVG from './User.svg';
import VideoSVG from './Video.svg';
import VolumeFullSVG from './VolumeFull.svg';
import VolumeOffSVG from './VolumeOff.svg';
import WalletSVG from './Wallet.svg';
import WandSVG from './Wand.svg';
import WorldSVG from './World.svg';

// handles weird Next.js image types
type DynamicSVG = string | { src: string, height: number, width: number };

// helper function to load DynamicSVGs
const loadSVG = (svg: DynamicSVG) => (typeof svg === 'string' ? svg : svg?.src);

// center SVGs in wrapper
const StyledReactSVG = styled(ReactSVG)`
    > div {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
`;

interface CustomSVGProps extends Omit<ReactSVGProps, 'src' | 'ref'> {
    svg: DynamicSVG;
    stroke?: string;
    fill?: string;
    height?: number;
    width?: number;
    viewBox?: string;
}

// A custom wrapper so we can easily do height, width, stroke and fill as props.
const CustomReactSVG = (props: CustomSVGProps) => (
    <StyledReactSVG
        src={String(props.svg)}
        beforeInjection={(svg: any) => {
            if (props.height) {
                svg.setAttribute('height', props.height.toString());
            }
            if (props.width) {
                svg.setAttribute('width', props.width.toString());
            }
            if (props.fill) {
                svg.setAttribute('style', `fill: ${props.fill};`);
            }
            if (props.stroke) {
                const paths = svg.querySelectorAll('path');
                paths.forEach((path: any) => {
                    path.setAttribute('style', `stroke: ${props.stroke};`);
                });
            }
            if (props.viewBox) {
                svg.setAttribute('viewBox', props.viewBox);
            }
        }}
        {...props}
    />
);

export type SVGProps = Omit<CustomSVGProps, 'svg'>;

const Accessibility = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AccessibilitySVG)} {...props} />;
const Alert = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AlertSVG)} {...props} />;
const Alien = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AlienSVG)} {...props} />;
const Analytics = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AnalyticsSVG)} {...props} />;
const AR = (props: SVGProps) => <CustomReactSVG svg={loadSVG(ARSVG)} {...props} />;
const Arrange = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrangeSVG)} {...props} />;
const ArrowBackUp = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrowBackUpSVG)} {...props} />;
const ArrowDown = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrowDownSVG)} {...props} />;
const ArrowLeft = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrowLeftSVG)} {...props} />;
const ArrowRight = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrowRightSVG)} {...props} />;
const ArrowUp = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArrowUpSVG)} {...props} />;
const Art = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ArtSVG)} {...props} />;
const Avatar = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AvatarSVG)} {...props} />;
const Award = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(AwardSVG)} {...props} />;
const Ban = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(BanSVG)} {...props} />;
const Billing = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(BillingSVG)} {...props} />;
const Bookmark = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(BookmarkSVG)} {...props} />;
const Brush = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(BrushSVG)} {...props} />;
const Business = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(BusinessSVG)} {...props} />;
const Camera = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CameraSVG)} {...props} />;
const Card = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CardSVG)} {...props} />;
const Cart = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CartSVG)} {...props} />;
const Check = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CheckSVG)} {...props} />;
const Close = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CloseSVG)} {...props} />;
const Collection = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CollectionSVG)} {...props} />;
const Concert = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ConcertSVG)} {...props} />;
const ConnectedWallets = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ConnectedWalletsSVG)} {...props} />;
const ConnectNewWallet = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ConnectNewWalletSVG)} {...props} />;
const Copy = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CopySVG)} {...props} />;
const Crypto = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(CryptoSVG)} {...props} />;
const Delete = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DeleteSVG)} {...props} />;
const Desktop = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DesktopSVG)} {...props} />;
const Digital = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DigitalSVG)} {...props} />;
const Document = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DocumentSVG)} {...props} />;
const Done = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DoneSVG)} {...props} />;
const Dots = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DotsSVG)} {...props} />;
const Download = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DownloadSVG)} {...props} />;
const DragPoint = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DragPointSVG)} {...props} />;
const DropDown = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DropDownSVG)} {...props} />;
const DropLeft = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DropLeftSVG)} {...props} />;
const DropRight = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DropRightSVG)} {...props} />;
const DropUp = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(DropUpSVG)} {...props} />;
const Edit = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(EditSVG)} {...props} />;
const Empty = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(EmptySVG)} {...props} />;
const Error = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ErrorSVG)} {...props} />;
const Events = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(EventsSVG)} {...props} />;
const ExternalLink = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ExternalLinkSVG)} {...props} />;
const EyeClose = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(EyeCloseSVG)} {...props} />;
const EyeOpen = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(EyeOpenSVG)} {...props} />;
const Fashion = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FashionSVG)} {...props} />;
const Feed = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FeedSVG)} {...props} />;
const Filter = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FilterSVG)} {...props} />;
const Friends = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FriendsSVG)} {...props} />;
const FriendsAdd = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FriendsAddSVG)} {...props} />;
const FriendsList = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FriendsListSVG)} {...props} />;
const FriendsRequests = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FriendsRequestsSVG)} {...props} />;
const Fullscreen = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(FullscreenSVG)} {...props} />;
const Ghost = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(GhostSVG)} {...props} />;
const GoProView = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(GoProViewSVG)} {...props} />;
const Heart = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(HeartSVG)} {...props} />;
const Help = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(HelpSVG)} {...props} />;
const Home = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(HomeSVG)} {...props} />;
const Image = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ImageSVG)} {...props} />;
const Influence = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(InfluenceSVG)} {...props} />;
const Info = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(InfoSVG)} {...props} />;
const Lab = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(LabSVG)} {...props} />;
const Link = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(LinkSVG)} {...props} />;
const ListIcons = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ListIconsSVG)} {...props} />;
const ListLinks = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ListLinksSVG)} {...props} />;
const Login = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(LoginSVG)} {...props} />;
const Logout = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(LogoutSVG)} {...props} />;
const Media = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MediaSVG)} {...props} />;
const Meetup = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MeetupSVG)} {...props} />;
const Menu = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MenuSVG)} {...props} />;
const Messages = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MessagesSVG)} {...props} />;
const Mic = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MicSVG)} {...props} />;
const MicOff = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MicOffSVG)} {...props} />;
const Minus = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MinusSVG)} {...props} />;
const Mobile = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(MobileSVG)} {...props} />;
const Model = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ModelSVG)} {...props} />;
const NFT = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(NFTSVG)} {...props} />;
const Notifications = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(NotificationsSVG)} {...props} />;
const Orders = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(OrdersSVG)} {...props} />;
const OrdersList = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(OrdersListSVG)} {...props} />;
const Pause = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PauseSVG)} {...props} />;
const Pen = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PenSVG)} {...props} />;
const Phygital = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PhygitalSVG)} {...props} />;
const Physical = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PhysicalSVG)} {...props} />;
const Play = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PlaySVG)} {...props} />;
const Plus = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PlusSVG)} {...props} />;
const ProductCode = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ProductCodeSVG)} {...props} />;
const Products = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ProductsSVG)} {...props} />;
const Profile = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ProfileSVG)} {...props} />;
const Promote = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(PromoteSVG)} {...props} />;
const QRCode = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(QRCodeSVG)} {...props} />;
const Refresh = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(RefreshSVG)} {...props} />;
const Retail = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(RetailSVG)} {...props} />;
const ReturnAndRefund = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ReturnAndRefundSVG)} {...props} />;
const Scene = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SceneSVG)} {...props} />;
const ScreenShare = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ScreenShareSVG)} {...props} />;
const Search = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SearchSVG)} {...props} />;
const Security = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SecuritySVG)} {...props} />;
const Selector = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SelectorSVG)} {...props} />;
const Send = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SendSVG)} {...props} />;
const Settings = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SettingsSVG)} {...props} />;
const Share = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ShareSVG)} {...props} />;
const Show = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(ShowSVG)} {...props} />;
const Smile = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SmileSVG)} {...props} />;
const Space = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SpaceSVG)} {...props} />;
const SpaceCollection = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SpaceCollectionSVG)} {...props} />;
const Spaces = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SpacesSVG)} {...props} />;
const Sport = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SportSVG)} {...props} />;
const Star = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(StarSVG)} {...props} />;
const Subscription = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SubscriptionSVG)} {...props} />;
const Support = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(SupportSVG)} {...props} />;
const Table = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(TableSVG)} {...props} />;
const Template = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(TemplateSVG)} {...props} />;
const Ticket = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(TicketSVG)} {...props} />;
const Transfer = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(TransferSVG)} {...props} />;
const Upload = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(UploadSVG)} {...props} />;
const User = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(UserSVG)} {...props} />;
const Video = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(VideoSVG)} {...props} />;
const VolumeFull = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(VolumeFullSVG)} {...props} />;
const VolumeOff = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(VolumeOffSVG)} {...props} />;
const Wallet = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(WalletSVG)} {...props} />;
const Wand = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(WandSVG)} {...props} />;
const World = (props?: SVGProps) => <CustomReactSVG svg={loadSVG(WorldSVG)} {...props} />;

export {
    // SVG react component export
    Accessibility,
    Alert,
    Alien,
    Analytics,
    AR,
    Arrange,
    ArrowBackUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Art,
    Avatar,
    Award,
    Ban,
    Billing,
    Bookmark,
    Brush,
    Business,
    Camera,
    Card,
    Cart,
    Check,
    Close,
    Collection,
    Concert,
    ConnectedWallets,
    ConnectNewWallet,
    Copy,
    Crypto,
    Delete,
    Desktop,
    Digital,
    Document,
    Done,
    Dots,
    Download,
    DragPoint,
    DropDown,
    DropLeft,
    DropRight,
    DropUp,
    Edit,
    Empty,
    Error,
    Events,
    ExternalLink,
    EyeClose,
    EyeOpen,
    Fashion,
    Feed,
    Filter,
    Friends,
    FriendsAdd,
    FriendsList,
    FriendsRequests,
    Fullscreen,
    Ghost,
    GoProView,
    Heart,
    Help,
    Home,
    Image,
    Influence,
    Info,
    Lab,
    Link,
    ListIcons,
    ListLinks,
    Login,
    Logout,
    Media,
    Meetup,
    Menu,
    Messages,
    Mic,
    MicOff,
    Minus,
    Mobile,
    Model,
    NFT,
    Notifications,
    Orders,
    OrdersList,
    Pause,
    Pen,
    Phygital,
    Physical,
    Play,
    Plus,
    ProductCode,
    Products,
    Profile,
    Promote,
    QRCode,
    Refresh,
    Retail,
    ReturnAndRefund,
    Scene,
    ScreenShare,
    Search,
    Security,
    Selector,
    Send,
    Settings,
    Share,
    Show,
    Smile,
    Space,
    SpaceCollection,
    Spaces,
    Sport,
    Star,
    Subscription,
    Support,
    Table,
    Template,
    Ticket,
    Transfer,
    Upload,
    User,
    Video,
    VolumeFull,
    VolumeOff,
    Wallet,
    Wand,
    World,
    // raw SVG export
    AccessibilitySVG,
    AlertSVG,
    AlienSVG,
    AnalyticsSVG,
    ARSVG,
    ArrangeSVG,
    ArrowBackUpSVG,
    ArrowDownSVG,
    ArrowLeftSVG,
    ArrowRightSVG,
    ArrowUpSVG,
    ArtSVG,
    AvatarSVG,
    AwardSVG,
    BanSVG,
    BillingSVG,
    BookmarkSVG,
    BrushSVG,
    BusinessSVG,
    CameraSVG,
    CardSVG,
    CartSVG,
    CheckSVG,
    CloseSVG,
    CollectionSVG,
    ConcertSVG,
    ConnectedWalletsSVG,
    ConnectNewWalletSVG,
    CopySVG,
    CryptoSVG,
    DeleteSVG,
    DesktopSVG,
    DigitalSVG,
    DocumentSVG,
    DoneSVG,
    DotsSVG,
    DownloadSVG,
    DragPointSVG,
    DropDownSVG,
    DropLeftSVG,
    DropRightSVG,
    DropUpSVG,
    EditSVG,
    EmptySVG,
    ErrorSVG,
    EventsSVG,
    ExternalLinkSVG,
    EyeCloseSVG,
    EyeOpenSVG,
    FashionSVG,
    FeedSVG,
    FilterSVG,
    FriendsSVG,
    FriendsAddSVG,
    FriendsListSVG,
    FriendsRequestsSVG,
    FullscreenSVG,
    GhostSVG,
    GoProViewSVG,
    HeartSVG,
    HelpSVG,
    HomeSVG,
    ImageSVG,
    InfluenceSVG,
    InfoSVG,
    LabSVG,
    LinkSVG,
    ListIconsSVG,
    ListLinksSVG,
    LoginSVG,
    LogoutSVG,
    MediaSVG,
    MeetupSVG,
    MenuSVG,
    MessagesSVG,
    MicSVG,
    MicOffSVG,
    MinusSVG,
    MobileSVG,
    ModelSVG,
    NFTSVG,
    NotificationsSVG,
    OrdersSVG,
    OrdersListSVG,
    PauseSVG,
    PenSVG,
    PhygitalSVG,
    PhysicalSVG,
    PlaySVG,
    PlusSVG,
    ProductCodeSVG,
    ProductsSVG,
    ProfileSVG,
    PromoteSVG,
    QRCodeSVG,
    RefreshSVG,
    RetailSVG,
    ReturnAndRefundSVG,
    SceneSVG,
    ScreenShareSVG,
    SearchSVG,
    SecuritySVG,
    SelectorSVG,
    SendSVG,
    SettingsSVG,
    ShareSVG,
    ShowSVG,
    SmileSVG,
    SpaceSVG,
    SpaceCollectionSVG,
    SpacesSVG,
    SportSVG,
    StarSVG,
    SubscriptionSVG,
    SupportSVG,
    TableSVG,
    TemplateSVG,
    TicketSVG,
    TransferSVG,
    UploadSVG,
    UserSVG,
    VideoSVG,
    VolumeFullSVG,
    VolumeOffSVG,
    WalletSVG,
    WandSVG,
    WorldSVG,
};
