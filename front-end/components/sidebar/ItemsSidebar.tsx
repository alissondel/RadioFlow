import {
  Computer,
  Building2,
  DollarSign,
  Proportions,
  CircleCheckBig,
} from "lucide-react"

export const ItemsSidebar = [
  {
    href: '#',
    label: 'Configurações',
    icon: <Building2 />,
    children: [
      {
        href: '#',
        label: 'Cadastro de Empresa',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastro de Usuários',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Permissões de usuários',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Parametros do sistema',
        icon: <Building2 />,
      },
    ]
  },
  {
    href: '#',
    label: 'Administração',
    icon: <Computer />,
    children: [
      {
        href: '#',
        label: 'Cadastrar Clientes',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Representantes',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Contato comercial',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Portador',
        icon: <Building2 />,
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
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Visualizar Distribuição',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Emissão de Documentos',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Criar horários operacionais',
        icon: <Building2 />,
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
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Contas a Pagar',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Movimentação Bancária',
        icon: <Building2 />,
      }
    ]
  },
  {
    href: '#',
    label: 'Relatórios',
    icon: <Proportions />,
    children: [{
      href: '#',
      label: 'Relatórios Gerenciais',
      icon: <Building2 />,
    }]
  }
]