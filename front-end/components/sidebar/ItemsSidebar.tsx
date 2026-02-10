import {
  Users,
  Clock,
  Wallet,
  Settings,
  Calendar,
  UserStar,
  Computer,
  FileText,
  Landmark,
  HandCoins,
  Building2,
  Newspaper,
  PiggyBank,
  Settings2,
  DollarSign,
  UsersRound,
  ShieldUser,
  CircleCheckBig,
  BanknoteArrowDown,
} from "lucide-react"

export const ItemsSidebar = [
  {
    href: '#',
    label: 'Configurações',
    icon: <Settings />,
    children: [
      {
        href: '#',
        label: 'Cadastro de Empresa',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastro de Usuários',
        icon: <UsersRound />,
      },
      {
        href: '#',
        label: 'Permissões de usuários',
        icon: <ShieldUser />,
      },
      {
        href: '#',
        label: 'Parametros do sistema',
        icon: <Settings2 />,
      },
    ]
  },
  {
    href: '#',
    label: 'Administração',
    icon: <Computer />,
    children: [
      {
        href: '/customers',
        label: 'Cadastrar Clientes',
        icon: <Users />,
      },
      {
        href: '#',
        label: 'Cadastrar Representantes',
        icon: <UserStar />,
      },
      {
        href: '#',
        label: 'Cadastrar Portador',
        icon: <Landmark />,
      }
    ],
  },
  {
    href: '#',
    label: 'Comercial',
    icon: <CircleCheckBig />,
    children: [
      {
        href: '#',
        label: 'Cadastrar Contrato',
        icon: <Wallet />,
      },
      {
        href: '#',
        label: 'Visualizar Distribuição',
        icon: <Calendar />,
      },
      {
        href: '#',
        label: 'Emissão de Documentos',
        icon: <FileText />,
      },
      {
        href: '#',
        label: 'Criação de Breaks',
        icon: <Clock />,
      },
    ]
  },
  {
    href: '#',
    label: 'Financeiro',
    icon: <DollarSign />,
    children: [
      {
        href: '#',
        label: 'Contas a Receber',
        icon: <HandCoins />,
      },
      {
        href: '#',
        label: 'Contas a Pagar',
        icon: <BanknoteArrowDown />,
      },
      {
        href: '#',
        label: 'Movimentação Bancária',
        icon: <PiggyBank />,
      }
    ]
  },
  {
    href: '#',
    label: 'Relatórios',
    icon: <Newspaper />,
    children: [{
      href: '#',
      label: 'Relatórios Gerenciais',
      icon: <Newspaper />,
    }]
  }
]