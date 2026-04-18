import {
  House, Star, User, Settings, CircleArrowRight, Eye, EyeOff, Search,
  DollarSign, Copy, GripVertical, Grip, Info, Check, Files, Link,
  Filter, Video, MessageCircle, Send, Sparkles, PiggyBank, RotateCcw,
  Handshake, BriefcaseBusiness, StretchHorizontal, Download, Upload,
  Gauge, Folder, FolderOpen, Trash2, SquarePen, PaintBucket, Expand,
  FileStack, ZoomIn, ZoomOut, Clock, Save, Crosshair, Lightbulb,
  ChartSpline, SwatchBook, Pipette, File, TrendingUp, TrendingDown,
  History, Newspaper, SendHorizontal, ThumbsUp, ThumbsDown, Flag,
  LayoutDashboard, HeartHandshake, Calculator, LogOut, Bell, Scroll,
  Moon, Timer, Sun,
  // resolved — name differs from Figma
  Calendar, TriangleAlert, Pencil, X, AlertTriangle, Plus, Minus,
  Map, Building2, Menu, RefreshCw, Crown, MoreHorizontal, Paperclip,
  QrCode, ChevronUp, ChevronDown, Loader2, CheckCheck, CircleCheck,
  CircleX, CircleAlert, Image, Maximize2, Minimize2, Grid2X2,
} from 'lucide-react';
import StatusRascunho from '../../components/Icon/custom/StatusRascunho';
import StatusAberto from '../../components/Icon/custom/StatusAberto';
import StatusDev from '../../components/Icon/custom/StatusDev';
import Uncheck1 from '../../components/Icon/custom/Uncheck1';
import Uncheck2 from '../../components/Icon/custom/Uncheck2';
import PlathanusTolerancias from '../../components/Icon/custom/PlathanusTolerancias';
import ChartSpline2 from '../../components/Icon/custom/ChartSpline2';
import Whatsapp from '../../components/Icon/custom/Whatsapp';
import CheckFull from '../../components/Icon/custom/CheckFull';
import CircleXFilled from '../../components/Icon/custom/CircleXFilled';
import CircleAlertFilled from '../../components/Icon/custom/CircleAlertFilled';
import Atencao from '../../components/Icon/custom/Atencao';
import './IconsSection.css';

const customIcons = [
  { name: 'StatusRascunho',       component: StatusRascunho },
  { name: 'StatusAberto',         component: StatusAberto },
  { name: 'StatusDev',            component: StatusDev },
  { name: 'Uncheck1',             component: Uncheck1 },
  { name: 'Uncheck2',             component: Uncheck2 },
  { name: 'PlathanusTolerancias', component: PlathanusTolerancias },
  { name: 'ChartSpline2',         component: ChartSpline2 },
  { name: 'Whatsapp',             component: Whatsapp },
  { name: 'CheckFull',            component: CheckFull },
  { name: 'CircleXFilled',        component: CircleXFilled },
  { name: 'CircleAlertFilled',    component: CircleAlertFilled },
  { name: 'Atencao',              component: Atencao },
];

const iconsM = [
  { figma: 'House',               component: House },
  { figma: 'Star',                component: Star },
  { figma: 'User',                component: User },
  { figma: 'Settings',            component: Settings },
  { figma: 'circle-arrow-right',  component: CircleArrowRight },
  { figma: 'eye',                 component: Eye },
  { figma: 'eye-off',             component: EyeOff },
  { figma: 'search',              component: Search },
  { figma: 'dollar-sign',         component: DollarSign },
  { figma: 'copy',                component: Copy },
  { figma: 'grip-vertical',       component: GripVertical },
  { figma: 'grip',                component: Grip },
  { figma: 'Info',                component: Info },
  { figma: 'Check',               component: Check },
  { figma: 'Files',               component: Files },
  { figma: 'Link',                component: Link },
  { figma: 'filter',              component: Filter },
  { figma: 'video',               component: Video },
  { figma: 'message circle',      component: MessageCircle },
  { figma: 'send',                component: Send },
  { figma: 'sparkles',            component: Sparkles },
  { figma: 'piggy-bank',          component: PiggyBank },
  { figma: 'rotate-ccw',          component: RotateCcw },
  { figma: 'handshake',           component: Handshake },
  { figma: 'briefcase-business',  component: BriefcaseBusiness },
  { figma: 'stretch-horizontal',  component: StretchHorizontal },
  { figma: 'download',            component: Download },
  { figma: 'upload',              component: Upload },
  { figma: 'gauge',               component: Gauge },
  { figma: 'folder',              component: Folder },
  { figma: 'folder-open',         component: FolderOpen },
  { figma: 'trash',               component: Trash2 },
  { figma: 'square-pen',          component: SquarePen },
  { figma: 'paint-bucket',        component: PaintBucket },
  { figma: 'expand',              component: Expand },
  { figma: 'file-stack',          component: FileStack },
  { figma: 'zoom-in',             component: ZoomIn },
  { figma: 'zoom-out',            component: ZoomOut },
  { figma: 'clock',               component: Clock },
  { figma: 'save',                component: Save },
  { figma: 'crosshair',           component: Crosshair },
  { figma: 'lightbulb',           component: Lightbulb },
  { figma: 'chart-spline',        component: ChartSpline },
  { figma: 'swatch-book',         component: SwatchBook },
  { figma: 'pipette',             component: Pipette },
  { figma: 'file',                component: File },
  { figma: 'trending-up',         component: TrendingUp },
  { figma: 'trending-down',       component: TrendingDown },
  { figma: 'history',             component: History },
  { figma: 'newspaper',           component: Newspaper },
  { figma: 'send-horizontal',     component: SendHorizontal },
  { figma: 'thumbs-up',           component: ThumbsUp },
  { figma: 'thumbs-down',         component: ThumbsDown },
  { figma: 'flag',                component: Flag },
  { figma: 'layout-dashboard',    component: LayoutDashboard },
  { figma: 'heart-handshake',     component: HeartHandshake },
  { figma: 'calculator',          component: Calculator },
  { figma: 'log-out',             component: LogOut },
  { figma: 'bell',                component: Bell },
  { figma: 'scroll',              component: Scroll },
  { figma: 'moon',                component: Moon },
  { figma: 'timer',               component: Timer },
  { figma: 'sun',                 component: Sun },
  // resolved — Lucide name used as reference
  { figma: 'Calendar',           component: Calendar },
  { figma: 'TriangleAlert',      component: TriangleAlert },
  { figma: 'Pencil',             component: Pencil },
  { figma: 'X',                  component: X },
  { figma: 'AlertTriangle',      component: AlertTriangle },
  { figma: 'Plus',               component: Plus },
  { figma: 'Minus',              component: Minus },
  { figma: 'Map',                component: Map },
  { figma: 'Building2',          component: Building2 },
  { figma: 'Menu',               component: Menu },
  { figma: 'RefreshCw',          component: RefreshCw },
  { figma: 'Crown',              component: Crown },
  { figma: 'MoreHorizontal',     component: MoreHorizontal },
  { figma: 'Paperclip',          component: Paperclip },
  { figma: 'QrCode',             component: QrCode },
  { figma: 'ChevronUp',          component: ChevronUp },
  { figma: 'ChevronDown',        component: ChevronDown },
  { figma: 'Loader2',            component: Loader2 },
  { figma: 'CheckCheck',         component: CheckCheck },
  { figma: 'CircleCheck',        component: CircleCheck },
  { figma: 'CircleX',            component: CircleX },
  { figma: 'CircleAlert',        component: CircleAlert },
  { figma: 'Image',              component: Image },
  { figma: 'Maximize2',          component: Maximize2 },
  { figma: 'Minimize2',          component: Minimize2 },
  { figma: 'Grid2X2',            component: Grid2X2 },
];

export default function IconsSection() {
  return (
    <div className="icons-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Icons — Size M (24×24 · stroke 2)</h2>
        <p className="ds-section-sub">{iconsM.length} ícones confirmados · pendentes serão adicionados após decisão</p>
        <div className="icons-grid">
          {iconsM.map(({ figma, component: Icon }) => (
            <div key={figma} className="icon-item">
              <div className="icon-box">
                <Icon size={18} strokeWidth={2} />
              </div>
              <span className="icon-name">{figma}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Icons — Size P (16×16 · stroke 1.33)</h2>
        <div className="icons-grid">
          {iconsM.map(({ figma, component: Icon }) => (
            <div key={figma} className="icon-item">
              <div className="icon-box icon-box--p">
                <Icon size={13} strokeWidth={1.33} />
              </div>
              <span className="icon-name">{figma}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Custom Icons — Size M (24×24 · stroke 2)</h2>
        <p className="ds-section-sub">Ícones exclusivos do sistema — extraídos diretamente do Figma como SVG</p>
        <div className="icons-grid">
          {customIcons.map(({ name, component: Icon }) => (
            <div key={name} className="icon-item">
              <div className="icon-box">
                <Icon size={18} color="currentColor" strokeWidth={2} />
              </div>
              <span className="icon-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Custom Icons — Size P (16×16 · stroke 1.33)</h2>
        <div className="icons-grid">
          {customIcons.map(({ name, component: Icon }) => (
            <div key={name} className="icon-item">
              <div className="icon-box icon-box--p">
                <Icon size={13} color="currentColor" strokeWidth={1.33} />
              </div>
              <span className="icon-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
