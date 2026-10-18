// One icon family for the whole app: Phosphor. Screens use semantic names
// ("listen", "weak"), never library names, so the set can change in one place.
// Icons are imported file by file to keep the bundle small.
import { ArrowRightIcon } from 'phosphor-react-native/src/icons/ArrowRight';
import { ArrowsClockwiseIcon } from 'phosphor-react-native/src/icons/ArrowsClockwise';
import { BicycleIcon } from 'phosphor-react-native/src/icons/Bicycle';
import { BookOpenIcon } from 'phosphor-react-native/src/icons/BookOpen';
import { BriefcaseIcon } from 'phosphor-react-native/src/icons/Briefcase';
import { CalendarBlankIcon } from 'phosphor-react-native/src/icons/CalendarBlank';
import { CameraIcon } from 'phosphor-react-native/src/icons/Camera';
import { CardsIcon } from 'phosphor-react-native/src/icons/Cards';
import { CaretLeftIcon } from 'phosphor-react-native/src/icons/CaretLeft';
import { CaretRightIcon } from 'phosphor-react-native/src/icons/CaretRight';
import { ChartLineUpIcon } from 'phosphor-react-native/src/icons/ChartLineUp';
import { ChatCircleDotsIcon } from 'phosphor-react-native/src/icons/ChatCircleDots';
import { ChatsCircleIcon } from 'phosphor-react-native/src/icons/ChatsCircle';
import { CheckIcon } from 'phosphor-react-native/src/icons/Check';
import { CheckCircleIcon } from 'phosphor-react-native/src/icons/CheckCircle';
import { CheckSquareIcon } from 'phosphor-react-native/src/icons/CheckSquare';
import { ChecksIcon } from 'phosphor-react-native/src/icons/Checks';
import { CircleIcon } from 'phosphor-react-native/src/icons/Circle';
import { CircleHalfIcon } from 'phosphor-react-native/src/icons/CircleHalf';
import { CodeIcon } from 'phosphor-react-native/src/icons/Code';
import { CoffeeIcon } from 'phosphor-react-native/src/icons/Coffee';
import { DownloadSimpleIcon } from 'phosphor-react-native/src/icons/DownloadSimple';
import { EyeIcon } from 'phosphor-react-native/src/icons/Eye';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { GiftIcon } from 'phosphor-react-native/src/icons/Gift';
import { GitBranchIcon } from 'phosphor-react-native/src/icons/GitBranch';
import { GraduationCapIcon } from 'phosphor-react-native/src/icons/GraduationCap';
import { HeartIcon } from 'phosphor-react-native/src/icons/Heart';
import { HeartbeatIcon } from 'phosphor-react-native/src/icons/Heartbeat';
import { KeyboardIcon } from 'phosphor-react-native/src/icons/Keyboard';
import { LeafIcon } from 'phosphor-react-native/src/icons/Leaf';
import { LightningIcon } from 'phosphor-react-native/src/icons/Lightning';
import { ListChecksIcon } from 'phosphor-react-native/src/icons/ListChecks';
import { LockSimpleIcon } from 'phosphor-react-native/src/icons/LockSimple';
import { MicrophoneIcon } from 'phosphor-react-native/src/icons/Microphone';
import { MinusIcon } from 'phosphor-react-native/src/icons/Minus';
import { MusicNotesIcon } from 'phosphor-react-native/src/icons/MusicNotes';
import { PawPrintIcon } from 'phosphor-react-native/src/icons/PawPrint';
import { PencilSimpleLineIcon } from 'phosphor-react-native/src/icons/PencilSimpleLine';
import { PlanetIcon } from 'phosphor-react-native/src/icons/Planet';
import { PlayIcon } from 'phosphor-react-native/src/icons/Play';
import { PlusIcon } from 'phosphor-react-native/src/icons/Plus';
import { RocketIcon } from 'phosphor-react-native/src/icons/Rocket';
import { SailboatIcon } from 'phosphor-react-native/src/icons/Sailboat';
import { ShuffleIcon } from 'phosphor-react-native/src/icons/Shuffle';
import { SignOutIcon } from 'phosphor-react-native/src/icons/SignOut';
import { SoccerBallIcon } from 'phosphor-react-native/src/icons/SoccerBall';
import { SparkleIcon } from 'phosphor-react-native/src/icons/Sparkle';
import { SpeakerHighIcon } from 'phosphor-react-native/src/icons/SpeakerHigh';
import { SunIcon } from 'phosphor-react-native/src/icons/Sun';
import { TextUnderlineIcon } from 'phosphor-react-native/src/icons/TextUnderline';
import { TranslateIcon } from 'phosphor-react-native/src/icons/Translate';
import { TrophyIcon } from 'phosphor-react-native/src/icons/Trophy';
import { UserCircleIcon } from 'phosphor-react-native/src/icons/UserCircle';
import { UsersThreeIcon } from 'phosphor-react-native/src/icons/UsersThree';
import { WarningCircleIcon } from 'phosphor-react-native/src/icons/WarningCircle';
import { XIcon } from 'phosphor-react-native/src/icons/X';

const ICONS = {
  // tabs
  today: CalendarBlankIcon,
  practice: LightningIcon,
  grammar: CheckSquareIcon,
  writing: PencilSimpleLineIcon,
  profile: UserCircleIcon,
  // practice modes
  mixed: ShuffleIcon,
  words: CardsIcon,
  sentences: ChatCircleDotsIcon,
  cloze: TextUnderlineIcon,
  work: BriefcaseIcon,
  everyday: CoffeeIcon,
  grammarList: ListChecksIcon,
  weak: HeartbeatIcon,
  verbs: GitBranchIcon,
  progress: ChartLineUpIcon,
  level: GraduationCapIcon,
  // community
  community: UsersThreeIcon,
  trophy: TrophyIcon,
  streak: FireIcon,
  // actions and states
  back: CaretLeftIcon,
  forward: CaretRightIcon,
  close: XIcon,
  play: PlayIcon,
  listen: SpeakerHighIcon,
  check: CheckIcon,
  done: ChecksIcon,
  checkCircle: CheckCircleIcon,
  circle: CircleIcon,
  learning: CircleHalfIcon,
  checkbox: CheckSquareIcon,
  repeat: ArrowsClockwiseIcon,
  chats: ChatsCircleIcon,
  sparkle: SparkleIcon,
  warning: WarningCircleIcon,
  camera: CameraIcon,
  pencil: PencilSimpleLineIcon,
  sun: SunIcon,
  minus: MinusIcon,
  plus: PlusIcon,
  signOut: SignOutIcon,
  translate: TranslateIcon,
  gift: GiftIcon,
  heart: HeartIcon,
  lock: LockSimpleIcon,
  next: ArrowRightIcon,
  reveal: EyeIcon,
  download: DownloadSimpleIcon,
  // answer modes
  modeTiles: CardsIcon,
  modeKeyboard: KeyboardIcon,
  modeSpeak: MicrophoneIcon,
  // avatars
  coffee: CoffeeIcon,
  code: CodeIcon,
  bicycle: BicycleIcon,
  book: BookOpenIcon,
  music: MusicNotesIcon,
  leaf: LeafIcon,
  rocket: RocketIcon,
  football: SoccerBallIcon,
  paw: PawPrintIcon,
  boat: SailboatIcon,
  planet: PlanetIcon,
};

// weight: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
export function Icon({ name, size = 22, color, weight = 'regular', duotoneColor }) {
  const Component = ICONS[name] ?? CircleIcon;
  return <Component size={size} color={color} weight={weight} duotoneColor={duotoneColor} />;
}
