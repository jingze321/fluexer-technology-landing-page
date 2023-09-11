import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import { FormControl, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';

const languageIcons = {
  chinese: '🇨🇳',
  english: '🇺🇸',
};

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about-us' },
  { name: 'services', href: '/service' },
  { name: 'career', href: '/career' },
  { name: 'contact', href: '/contact-us' },
];

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        icon: {
          fill: 'black',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: '100%',
    color: 'white',
  },
  select: {
    color: 'black',
    '&:before': {
      borderColor: 'black',
    },
    '&:after': {
      borderColor: 'black',
    },
  },
  icon: {
    fill: 'white',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const { locale = 'en' } = router;

  const [selectedLocale, setSelectedLocale] = useState<string>(locale);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  const changeLanguage = (newLanguageCode: string) => {
    router.push(router.pathname, undefined, { locale: newLanguageCode });
  };

  // Determine the base href based on the selected locale
  const baseHref = selectedLocale !== 'en' ? `/${selectedLocale}` : '';

  return (
    <Disclosure as="nav" className="bg-slate-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href={`${baseHref}/`} className="text-white text-xl font-bold">
                <Image
                  src="/assets/logo/company_full_logo.png" // Replace with your logo path
                  alt="Company Logo"
                  width={132} 
                  height={52} 
                />
                </a>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`${baseHref}${item.href}`} // Set the href attribute
                      className={`text-black hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === `${item.href}` ? 'bg-gray-600 text-gray-100' : ''
                      }`}
                    >
                      {t(`navbar.${item.name}`)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden sm:block ml-4 relative">
                <FormControl className={classes.formControl}>
                  <ThemeProvider theme={theme} >
                    <Select
                      labelId="language-label"
                      id="language"
                      value={selectedLocale}
                      onChange={(e) => {
                        setSelectedLocale(e.target.value as string);
                        changeLanguage(e.target.value as string);
                      }}
                      className='text-black'
                    >
                      <MenuItem value="en">
                        {languageIcons.english} {t('navbar.language.english')}
                      </MenuItem>
                      <MenuItem value="cn">
                        {languageIcons.chinese} {t('navbar.language.chinese')}
                      </MenuItem>
                    </Select>
                  </ThemeProvider>
                </FormControl>
              </div>

              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="text-gray-800 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ExpandMoreIcon className="h-6 w-6" />
                  ) : (
                    <ExpandMoreIcon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`${baseHref}${item.href}`} // Set the href attribute
                  className={`text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === `${item.href}` ? 'bg-gray-700 text-gray-100' : ''
                  }`}
                >
                  {t(`navbar.${item.name}`)}
                </a>
              ))}
            </div>

            <div className="px-2 py-1">
              <FormControl className={classes.formControl}>
                <Select
                  labelId="language-label"
                  id="language"
                  value={selectedLocale}
                  onChange={(e) => {
                    setSelectedLocale(e.target.value as string);
                    changeLanguage(e.target.value as string);
                  }}
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <MenuItem value="en">
                    {languageIcons.english} {t('navbar.language.english')}
                  </MenuItem>
                  <MenuItem value="cn">
                    {languageIcons.chinese} {t('navbar.language.chinese')}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
