import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../redux/features/product-requests/productRequestsSlice';
import { categories } from '../../data/formSelect';
import NavBtn from './NavBtn';

const HeaderNav = ({ menuOpen }) => {
  const dispatch = useDispatch();
  const {
    planned,
    in_progress,
    live,
    filters: { category: activeCategory },
  } = useSelector((state) => state.productRequests);

  const handleSetCategory = (input) => {
    dispatch(updateFilters({ name: 'category', value: input }));
  };

  return (
    <HeaderNavWrap data-testid="header-nav" className={menuOpen && 'active'}>
      <div className="header-nav-inner">
        <div className="categories">
          {categories.map((category) => (
            <NavBtn
              key={category.id}
              activeCategory={activeCategory}
              category={category}
              handleSetCategory={handleSetCategory}
            />
          ))}
        </div>
        <div className="roadmap">
          <div className="roadmap-intro">
            <h4>Roadmap</h4>
            <Link to="/roadmap">View</Link>
          </div>
          <p className="roadmap-item">
            <span className="circle orange"></span>
            <span>Planned</span>
            <span className="number">{planned?.length}</span>
          </p>
          <p className="roadmap-item">
            <span className="circle purple"></span>
            <span>In-Progress</span>
            <span className="number">{in_progress?.length}</span>
          </p>
          <p className="roadmap-item">
            <span className="circle blue"></span>
            <span>Live</span>
            <span className="number">{live?.length}</span>
          </p>
        </div>
      </div>
    </HeaderNavWrap>
  );
};

export default HeaderNav;

const HeaderNavWrap = styled.nav`
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 80px;
    height: calc(100% - 80px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(-100vw);
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }

  .header-nav-inner {
    position: fixed;
    right: 0;
    top: 80px;
    width: 300px;
    height: calc(100% - 80px);
    background: ${(props) => props.theme.grey_light};
    gap: 1.5rem;
    padding: 0 1.5rem;
    transform: translateX(100%);
    transition: all 0.5s ease-in-out;
    opacity: 0;

    .categories,
    .roadmap {
      background-color: ${(props) => props.theme.white};
      padding: 1.5rem;
      border-radius: ${misc.rounded.sm};
      margin-top: 1.5rem;
    }

    .categories {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.5rem;

      .btn {
        transition: background-color 0.3s ease-in-out;

        &.active {
          background-color: ${(props) => props.theme.blue} !important;
          color: ${(props) => props.theme.white};
        }
      }
    }

    .roadmap {
      &-intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        & > * {
          margin-bottom: 0;
        }

        a {
          text-decoration: underline;
        }
      }

      &-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0;

        .circle {
          width: 8px;
          height: 8px;
          border-radius: ${misc.rounded.full};

          &.orange {
            background-color: #e84d70;
          }

          &.purple {
            background-color: #a337f6;
          }

          &.blue {
            background-color: #28a7ed;
          }
        }

        .number {
          font-weight: ${typography.weight.semibold};
        }
      }
    }
  }

  &.active {
    &::before {
      transform: translateX(0);
      z-index: 20;
      opacity: 1;
    }

    .header-nav-inner {
      transform: translateX(0);
      z-index: 20;
      opacity: 1;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    transform: unset;

    &::before {
      display: none;
    }

    .header-nav-inner {
      position: relative;
      right: unset;
      top: unset;
      width: unset;
      height: unset;
      background: unset;
      gap: unset;
      padding: unset;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      transform: unset;
      opacity: 1;

      .categories,
      .roadmap {
        padding: 1.5rem;
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    .header-nav-inner {
      grid-template-columns: 1fr;
      gap: 2rem;

      .categories {
        gap: 0.75rem;
      }
    }
  }
`;
