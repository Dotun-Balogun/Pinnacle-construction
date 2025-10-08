'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaHome, FaChevronDown } from "react-icons/fa";
import * as motion from 'motion/react-client'

type DropDownItems = {
  id?: string;
  name: string;
  path: string;
};

type MenuList = {
  id: number;
  name?: string;
  icon?: IconType;
  path: string;
  dropdown?: DropDownItems[];
};

const menuList: MenuList[] = [
  { id: 1, icon: FaHome, path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Faq", path: "/faq" },
  { id: 4, name: "Blog", path: "/blog" },
  {
    id: 5,
    name: "Shop",
    path: "#",
    dropdown: [
      { name: "shop", path: "/shop" },
      { name: "Cart", path: "/carts" },
      { name: "WishList", path: "/wish-list" },
    ],
  },
];

const NavList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Check if any dropdown item is active
  const isDropdownActive = (dropdown?: DropDownItems[]) => {
    if (!dropdown) return false;
    return dropdown.some(item => pathname === item.path);
  };

  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="flex items-center justify-center space-x-10 text-secondary text-[18px] font-poppins font-medium">
        {menuList.map((menu) => {
          // Fixed active link logic
          const isActive = menu.path === "/"
            ? pathname === "/"
            : menu.path !== "#" && pathname.startsWith(menu.path);
          
          const hasActiveDropdown = isDropdownActive(menu.dropdown);

          return menu.dropdown ? (
            <DropdownMenu open={open} onOpenChange={setOpen} key={menu.id}>
              <DropdownMenuTrigger 
                className={`
                  relative flex justify-center items-center gap-1 
                  group transition-colors duration-300
                  ${hasActiveDropdown ? 'text-primar' : ''}
                `}
              >
                {menu.name}
                <FaChevronDown 
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
                {/* Hover border animation */}
                <span 
                  className={`
                    absolute -bottom-1 left-0 h-[4px] bg-primary
                    transition-all duration-300 ease-out
                    ${hasActiveDropdown ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent asChild align="start" className="rounded-none p-0">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {menu.dropdown.map((subMenu, idx) => (
                    <DropdownMenuItem
                      className="relative w-full rounded-none"
                      key={subMenu.id ?? `${menu.id}-${idx}`}
                    >
                      <Link href={subMenu.path} className="w-full">
                        {subMenu.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div key={menu.id} className="relative group">
              <Link 
                href={menu.path}
                className="flex items-center gap-1 transition-colors duration-300"
              >
                {menu.icon && <menu.icon />}
                {menu.name}
              </Link>
              {/* Animated border bottom */}
              <span 
                className={`
                  absolute -bottom-1 left-0 h-[4px] bg-primary
                  transition-all duration-300 ease-out
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavList;