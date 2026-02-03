import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbCustomProps {
  href?: string
  menu: string
  title: string
}

export function BreadcrumbCustom(props: BreadcrumbCustomProps) {
  return (
    <Breadcrumb className="flex justify-center items-center md:justify-start" >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={props?.href} className="text-base">
            {props.menu}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-base">
            {props.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb >
  )
}