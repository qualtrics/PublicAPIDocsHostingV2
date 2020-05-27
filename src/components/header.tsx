import { Search } from '@stoplight/elements';
import { Button, Icon } from '@stoplight/ui-kit';
import cn from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import StoplightProvider from './stoplight-provider';

const Header = ({ siteTitle, centered }: { siteTitle: string; centered: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="bg-blue-6">
        <div
          className={cn('flex items-baseline py-8', {
            'max-w-6xl mx-auto': centered,
            'px-10': !centered,
          })}
        >
          <Link to="/" className="text-white reset mr-10 text-xl">
            <span className="text-white font-bold">{siteTitle}</span>
          </Link>

          <Link to="/instructions/" className="reset mr-6 text-lg">
            <span className="text-white">Instructions</span>
          </Link>

          <Link to="/guides/" className="reset mr-6 text-lg">
            <span className="text-white">Guides</span>
          </Link>

          <Link to="/api-reference/" className="reset mr-6 text-lg">
            <span className="text-white">API Reference</span>
          </Link>

          <Button
            icon={<Icon icon="search" iconSize={14} color="white" />}
            className="text-white"
            minimal
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>

      <StoplightProvider projectSrn="gh/qualtrics/publicapidocs" path="guides">
        <Search srn="gh/qualtrics/publicapidocs" isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </StoplightProvider>
    </>
  );
};

export default Header;
