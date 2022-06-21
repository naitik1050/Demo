import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { character, client01, lightLogo, logoDark } from '../imageImport'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { userConstants } from '../../constants'
import { useDispatch, useSelector } from 'react-redux';
import Moralis from 'moralis';


const Navbar = () => {
  const [myPublicAddress, setMyPublicAddress] = useState('qhut0...hfteh45')
  const [ethBalance, setEthBalance] = useState(null)
  const [otherBalance, setOtherBalance] = useState({})

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const Web3Api = useMoralisWeb3Api();

  const { profile_image, user_data } = useSelector(state => state?.user_data)
  const { lightmode } = useSelector(state => state?.change_mode)

  const ethereum = window.ethereum
  if (ethereum) {
    ethereum.on('accountsChanged', accounts => {
      if (accounts[0] == undefined) {
        window.location.href = '/'
      }
    })
  }

  const url = useMemo(() => location?.pathname === '/blog-detail', [])
  const templatePage = [
    '/become-creator',
    '/creator-profile',
    '/item-detail-one',
    '/index-two',
    '/index-four',
    '/index-five',
    '/index-five-rtl',
    '/index-four-rtl',
    '/index-two-rtl'
  ]
  const becomeUrl = templatePage.includes(location?.pathname)
  const [mobile, setMobile] = useState([])
  const toggleSwitcher = () => {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }
  const mobileHandler = (e, panel) => {
    e.preventDefault()
    const dataIndex = mobile?.findIndex(data => data === panel)
    if (dataIndex === -1) {
      setMobile([...mobile, panel])
    } else {
      const updateRecord = mobile?.filter((data, index) => index !== dataIndex)
      setMobile(updateRecord)
    }
  }

  const closeModal = () => {
    //   metamask modal
    const modal = document.getElementById('modal-metamask')

    modal.classList.remove('show')
    modal.style.display = 'none'
  }

  const isMetaMaskInstalled = useCallback(() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }, [])

  const fetchTokenBalances = async (address) => {
    const options = {
      chain: "mumbai",
      address: address
    }


    const balances = await Web3Api.account.getTokenBalances(options);
    const txList = await Web3Api.account.getTransactions(options);
    console.log("txt status==>", txList);

    const filter_balance = balances.filter((item) => item.symbol == 'LQDA')
    const formatted_balance = {
      inWei: filter_balance[0].balance,
      formatted: Moralis.Units.FromWei(filter_balance[0].balance, filter_balance[0].decimals),
    };
    setOtherBalance({ symbol: filter_balance[0]?.symbol, balance: formatted_balance?.formatted })
  };

  const checkWalletConnet = useCallback(async () => {
    if (isMetaMaskInstalled()) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
      const wei = parseInt(balance, 16)
      const eth = (wei / Math.pow(10, 18))
      if (!!accounts[0]) {
        const walletAddress =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
        setMyPublicAddress(walletAddress)
        setEthBalance(eth)
        fetchTokenBalances(accounts[0])
        dispatch({ type: userConstants.STORE_WALLET_ADDRESS_REQUEST, payload: accounts[0] });
      }
    }
  }, [isMetaMaskInstalled])

  useEffect(() => {
    checkWalletConnet()
  }, [checkWalletConnet])

  const _handleConnectWallet = useCallback(async () => {
    const modal = document.getElementById('modal-metamask')

    if (!isMetaMaskInstalled()) {
      //meta mask not installed
      modal.classList.add('show')
      modal.style.display = 'block'
      return
    }
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
      const wei = parseInt(balance, 16)
      const eth = (wei / Math.pow(10, 18))
      const walletAddress =
        accounts[0].split('').slice(0, 6).join('') +
        '...' +
        accounts[0]
          .split('')
          .slice(accounts[0].length - 7, accounts[0].length)
          .join('')
      setMyPublicAddress(walletAddress)
      setEthBalance(eth)
      fetchTokenBalances(accounts[0])
      dispatch({ type: userConstants.STORE_WALLET_ADDRESS_REQUEST, payload: accounts[0] });
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }, [isMetaMaskInstalled])


  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = getClosest(matchingMenuItem, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }

  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };
  return (
    <>
      {/* Navbar STart */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${url && 'gradient'}`}
      >
        <div className="container">
          {/* Logo Start*/}
          <a
            className="logo"
            href="/index"
            onClick={e => {
              e.preventDefault()
              navigate('/index')
              setTimeout(() => {
                activateMenu()
                toggleSwitcher(false)
              }, 1000)
            }}
          >
            <span className="">
              <img
                src={logoDark}
                height="36"
                className={becomeUrl ? 'logo-light-mode' : 'l-dark'}
                alt=""
              />
              <img
                src={lightLogo}
                height="36"
                className={becomeUrl ? 'logo-dark-mode' : 'l-light'}
                alt=""
              />
            </span>
            {/* {!becomeUrl && (
              <img
                src={lightLogo}
                height="26"
                className="logo-dark-mode"
                alt=""
              />
            )} */}
          </a>
          {/* Logo end*/}

          {/* Mobile */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={e => {
                  e.preventDefault()
                  toggleMenu()
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* Mobile */}

          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-1">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {becomeUrl ? (
                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                  ) : (
                    <>
                      <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                      <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                    </>
                  )}
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: 300 }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control border rounded"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item mb-0 me-1">
              {becomeUrl ? (
                <a
                  id="connectWallet"
                  className="btn btn-icon btn-pills btn-primary"
                >
                  <i className="uil uil-wallet fs-6"></i>
                </a>
              ) : (
                <>
                  {myPublicAddress != 'qhut0...hfteh45' ?
                    <>
                      {lightmode ?
                        <span
                          onClick={() => {
                            dispatch({ type: userConstants.APPLY_MODE_SUCCESS, payload: false })
                          }}
                          className="btn btn-icon btn-pills btn-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          </svg>
                        </span> :
                        <span
                          onClick={() => {
                            dispatch({ type: userConstants.APPLY_MODE_SUCCESS, payload: true })
                          }}
                          className="btn btn-icon btn-pills btn-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          </svg>
                        </span>}
                    </>
                    :
                    <p id="connectWallet" onClick={_handleConnectWallet}>
                      <span className="btn-icon-dark">
                        <span className="btn btn-icon btn-pills btn-primary">
                          <i className="uil uil-wallet fs-6"></i>
                        </span>
                      </span>
                      <span className="btn-icon-light">
                        <span className="btn btn-icon btn-pills btn-light">
                          <i className="uil uil-wallet fs-6"></i>
                        </span>
                      </span>
                    </p>}
                </>
              )}
            </li>

            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-pills dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={profile_image}
                    className="rounded-pill avatar avatar-sm-sm"
                    alt=""
                  />
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                  style={{ minWidth: 200 }}
                >
                  <div className="position-relative">
                    <div className="pt-5 pb-3 bg-gradient-primary"></div>
                    <div className="px-3">
                      <div className="d-flex align-items-end mt-n4">
                        <img
                          src={profile_image}
                          className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                          alt=""
                        />
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          {user_data?.username}
                        </h6>
                      </div>
                      <div className="mt-2">
                        <small className="text-start text-dark d-block fw-bold">
                          Wallet:
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <small id="myPublicAddress" className="text-muted">
                            {myPublicAddress}
                          </small>
                          <a href="" onClick={e => e.preventDefault()} className="text-primary">
                            <span className="uil uil-copy"></span>
                          </a>
                        </div>
                      </div>

                      <div className="mt-2">
                        <small className="text-dark">
                          Balance:{' '}
                          <span className="text-primary fw-bold">
                            {ethBalance?.toFixed(4)}ETH
                          </span>
                        </small>
                      </div>

                      {otherBalance?.balance != undefined &&
                        <div className="mt-2">
                          <small className="text-dark">
                            {otherBalance?.symbol}:{' '}
                            <span className="text-primary fw-bold">
                              {otherBalance?.balance}
                            </span>
                          </small>
                        </div>}
                    </div>
                  </div>
                  <div className="mt-2">
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Profile
                    </a>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile-edit"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/creator-profile-edit')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-cog align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Settings
                    </a>
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/lock-screen"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        Moralis.User.logOut().then(() => {
                          const currentUser = Moralis.User.current();
                          dispatch({ type: userConstants.SIGNOUT_REQUEST });
                        });

                        // navigate('/lock-screen')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*Login button End*/}

          <div id="navigation">
            {/* Navigation Menu*/}
            <ul
              className={`navigation-menu nav-center ${!becomeUrl && 'nav-light'
                }`}
            >
              <li>
                <a
                  href="/dark-version-one"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/dark-version-one')
                  }}
                  className="sub-menu-item"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/explore-four"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/explore-four')
                  }}
                  className="sub-menu-item"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/upload-work')
                  }}
                  className="sub-menu-item"
                >
                  Tiers
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/contact')
                  }}
                  className="sub-menu-item"
                >
                  Activity
                </a>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
    </>
  )
}

export default Navbar
