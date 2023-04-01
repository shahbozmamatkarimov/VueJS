<!-- <template>
    <div class="app-container">
        <div class="app-content">
            <div class="app-content-header">
                <h1 class="app-content-headerText">Products</h1>
                <button class="mode-switch" title="Switch Theme">
                    <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                        <defs></defs>
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                </button>
                <button class="app-content-headerButton">Add Product</button>
            </div>
            <div class="app-content-actions">
                <input class="search-bar" placeholder="Search..." type="text">
                <div class="app-content-actions-wrapper">
                    <div class="filter-button-wrapper">
                        <button class="action-button filter jsFilter"><span>Filter</span><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-filter">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg></button>
                        <div class="filter-menu">
                            <label>Category</label>
                            <select>
                                <option>All Categories</option>
                                <option>Furniture</option>
                                <option>Decoration</option>
                                <option>Kitchen</option>
                                <option>Bathroom</option>
                            </select>
                            <label>Status</label>
                            <select>
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Disabled</option>
                            </select>
                            <div class="filter-menu-buttons">
                                <button class="filter-button reset">
                                    Reset
                                </button>
                                <button class="filter-button apply">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="action-button list active" title="List View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-list">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                    </button>
                    <button class="action-button grid" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="products-area-wrapper tableView">
                <div class="products-header">
                    <div class="product-cell image">
                        Items
                        <button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button>
                    </div>
                    <div class="product-cell category">Category<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button></div>
                    <div class="product-cell status-cell">Status<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button></div>
                    <div class="product-cell sales">Sales<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button></div>
                    <div class="product-cell stock">Stock<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button></div>
                    <div class="product-cell price">Price<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                            </svg>
                        </button></div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="product">
                        <div>Ocean</div>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>11</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>36</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$560</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Lou</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Kitchen</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status disabled">Disabled</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>6</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$710</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Yellow</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>61</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>56</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$360</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Dreamy</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Bedroom</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status disabled">Disabled</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>41</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>66</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$260</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Boheme</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Sky</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Bathroom</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status disabled">Disabled</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>22</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>44</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$160</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Midnight</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>23</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>45</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$340</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Boheme</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Palm</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>24</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$60</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Forest</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Living Room</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>41</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>16</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$270</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Sand</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Living Room</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status disabled">Disabled</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>52</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>16</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$230</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Autumn</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>21</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$252</div>
                </div>
                <div class="products-row">
                    <button class="cell-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                    <div class="product-cell image">
                        <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                        <span>Boheme</span>
                    </div>
                    <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
                    <div class="product-cell status-cell">
                        <span class="cell-label">Status:</span>
                        <span class="status active">Active</span>
                    </div>
                    <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
                    <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
                    <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
    box-sizing: border-box;
}

:root {
    --app-bg: #101827;
    --sidebar: rgba(21, 30, 47, 1);
    --sidebar-main-color: #fff;
    --table-border: #1a2131;
    --table-header: #1a2131;
    --app-content-main-color: #fff;
    --sidebar-link: #fff;
    --sidebar-active-link: #1d283c;
    --sidebar-hover-link: #1a2539;
    --action-color: #2869ff;
    --action-color-hover: #6291fd;
    --app-content-secondary-color: #1d283c;
    --filter-reset: #2c394f;
    --filter-shadow: rgba(16, 24, 39, 0.8) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.light:root {
    --app-bg: #fff;
    --sidebar: #f3f6fd;
    --app-content-secondary-color: #f3f6fd;
    --app-content-main-color: #1f1c2e;
    --sidebar-link: #1f1c2e;
    --sidebar-hover-link: rgba(195, 207, 244, 0.5);
    --sidebar-active-link: rgba(195, 207, 244, 1);
    --sidebar-main-color: #1f1c2e;
    --filter-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

$font-small: 14px;
$font-medium: 16px;
$font-large: 24px;

body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

body {
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: var(--app-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.app-container {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 1280px;
    display: flex;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 2000px;
    margin: 0 auto;
}

.sidebar {
    flex-basis: 200px;
    max-width: 200px;
    flex-shrink: 0;
    background-color: var(--sidebar);
    display: flex;
    flex-direction: column;

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
    }

    &-list {
        list-style-type: none;
        padding: 0;

        &-item {
            position: relative;
            margin-bottom: 4px;

            a {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 10px 16px;
                color: var(--sidebar-link);
                text-decoration: none;
                line-height: 24px;
            }

            svg {
                margin-right: 8px;
            }

            &:hover {
                background-color: var(--sidebar-hover-link);
            }

            &.active {
                background-color: var(--sidebar-active-link);

                &:before {
                    content: '';
                    position: absolute;
                    right: 0;
                    background-color: var(--action-color);
                    height: 100%;
                    width: 4px;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        & {
            display: none;
        }
    }
}

.mode-switch {
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--app-content-main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 8px;
    cursor: pointer;

    .moon {
        fill: var(--app-content-main-color);
    }
}

.mode-switch.active .moon {
    fill: none;
}

.account-info {
    display: flex;
    align-items: center;
    padding: 16px;
    margin-top: auto;

    &-picture {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-name {
        color: var(--sidebar-main-color);
        margin: 0 8px;
        overflow: hidden;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &-more {
        color: var(--sidebar-main-color);
        padding: 0;
        border: none;
        background-color: transparent;
        margin-left: auto;
    }
}

.app-icon {
    color: var(--sidebar-main-color);

    svg {
        width: 24px;
        height: 24px;
    }
}

.app-content {
    padding: 16px;
    background-color: var(--app-bg);
    height: 100%;
    flex: 1;
    max-height: 100%;
    display: flex;
    flex-direction: column;

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4px;
    }

    &-headerText {
        color: var(--app-content-main-color);
        line-height: 32px;
        margin: 0;
    }

    &-headerButton {
        background-color: var(--action-color);
        color: #fff;
        line-height: 24px;
        border: none;
        border-radius: 4px;
        height: 32px;
        padding: 0 16px;
        transition: .2s;
        cursor: pointer;

        &:hover {
            background-color: var(--action-color-hover);
        }
    }

    &-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 4px;

        &-wrapper {
            display: flex;
            align-items: center;
            margin-left: auto;
        }

        @media screen and (max-width: 520px) {
            & {
                flex-direction: column;

                .search-bar {
                    max-width: 100%;
                    order: 2;
                }

                .app-content-actions-wrapper {
                    padding-bottom: 16px;
                    order: 1;
                }
            }
        }
    }
}

@mixin searchIcon($color) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23#{$color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
}

.search-bar {
    background-color: var(--app-content-secondary-color);
    border: 1px solid var(--app-content-secondary-color);
    color: var(--app-content-main-color);
    line-height: 24px;
    border-radius: 4px;
    padding: 0px 10px 0px 32px;
    height: 32px;
    @include searchIcon('fff');
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: left 10px center;
    width: 100%;
    max-width: 320px;
    transition: .2s;

    .light & {
        @include searchIcon('1f1c2e');
    }

    &:placeholder {
        color: var(--app-content-main-color);
    }

    &:hover {
        border-color: var(--action-color-hover);
        @include searchIcon('6291fd');
    }

    &:focus {
        outline: none;
        border-color: var(--action-color);
        @include searchIcon('2869ff');
    }
}

.action-button {
    border-radius: 4px;
    height: 32px;
    background-color: var(--app-content-secondary-color);
    border: 1px solid var(--app-content-secondary-color);
    display: flex;
    align-items: center;
    color: var(--app-content-main-color);
    margin-left: 8px;
    cursor: pointer;

    span {
        margin-right: 4px;
    }

    &:hover {
        border-color: var(--action-color-hover);
    }

    &:focus,
    &.active {
        outline: none;
        color: var(--action-color);
        border-color: var(--action-color);
    }
}

.filter-button-wrapper {
    position: relative;
}

@mixin arrowDown($color) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23#{$color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
}

.filter-menu {
    background-color: var(--app-content-secondary-color);
    position: absolute;
    top: calc(100% + 16px);
    right: -74px;
    border-radius: 4px;
    padding: 8px;
    width: 220px;
    z-index: 2;
    box-shadow: var(--filter-shadow);

    visibility: hidden;
    opacity: 0;
    transition: .2s;

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;

        border-bottom: 5px solid var(--app-content-secondary-color);
        bottom: 100%;
        left: 50%;
        transform: translatex(-50%);
    }

    &.active {
        visibility: visible;
        opacity: 1;
        top: calc(100% + 8px);
    }

    label {
        display: block;
        color: var(--app-content-main-color);
        margin-bottom: 8px;
    }

    select {
        appearance: none;
        @include arrowDown('fff');
        background-repeat: no-repeat;
        padding: 8px 24px 8px 8px;
        background-position: right 4px center;
        border: 1px solid var(--app-content-main-color);
        border-radius: 4px;
        color: var(--app-content-main-color);
        background-color: transparent;
        margin-bottom: 16px;
        width: 100%;

        .light & {
            @include arrowDown('1f1c2e');
        }

        &:hover {
            border-color: var(--action-color-hover);
        }

        &:focus,
        &.active {
            outline: none;
            color: var(--action-color);
            border-color: var(--action-color);
            @include arrowDown('2869ff');
        }
    }
}

.filter-menu-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filter-button {
    border-radius: 2px;
    padding: 4px 8px;
    cursor: pointer;
    border: none;
    color: #fff;

    &.apply {
        background-color: var(--action-color);
    }

    &.reset {
        background-color: var(--filter-reset);
    }
}

.products-area-wrapper {
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 0 4px;
}

.tableView {
    .products-header {
        display: flex;
        align-items: center;
        border-radius: 4px;
        background-color: var(--app-content-secondary-color);
        position: sticky;
        top: 0;
    }

    .products-row {
        display: flex;
        align-items: center;
        border-radius: 4px;

        &:hover {
            box-shadow: var(--filter-shadow);
            background-color: var(--app-content-secondary-color);
        }

        .cell-more-button {
            display: none;
        }
    }

    .product-cell {
        flex: 1;
        padding: 8px 16px;
        color: var(--app-content-main-color);
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            border-radius: 6px;
            margin-right: 6px;
        }

        @media screen and (max-width: 780px) {
            & {
                &.image span {
                    display: none;
                }

                &.image {
                    flex: 0.2;
                }
            }
        }

        @media screen and (max-width: 520px) {
            & {

                &.category,
                &.sales {
                    display: none;
                }

                &.status-cell {
                    flex: 0.4;
                }

                &.stock,
                &.price {
                    flex: 0.2;
                }
            }
        }

        @media screen and (max-width: 480px) {
            & {
                &.stock {
                    display: none;
                }

                &.price {
                    flex: 0.4;
                }
            }
        }
    }

    .sort-button {
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--app-content-main-color);
        margin-left: 4px;
        display: flex;
        align-items: center;

        &:hover {
            color: var(--action-color);
        }

        svg {
            width: 12px;
        }
    }

    .cell-label {
        display: none;
    }
}

.status {
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 4px 8px;

    &:before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin-right: 4px;
    }

    &.active {
        color: #2ba972;
        background-color: rgba(43, 169, 114, 0.2);

        &:before {
            background-color: #2ba972;
        }
    }

    &.disabled {
        color: #59719d;
        background-color: rgba(89, 113, 157, 0.2);

        &:before {
            background-color: #59719d;
        }
    }
}

.gridView {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;

    @media screen and (max-width: 520px) {
        & {
            margin: 0;
        }
    }

    .products-header {
        display: none;
    }

    .products-row {
        margin: 8px;
        width: calc(25% - 16px);
        background-color: var(--app-content-secondary-color);
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: transform .2s;
        position: relative;

        &:hover {
            transform: scale(1.01);
            box-shadow: var(--filter-shadow);

            .cell-more-button {
                display: flex;
            }
        }

        @media screen and (max-width: 1024px) {
            & {
                width: calc(33.3% - 16px);
            }
        }

        @media screen and (max-width: 820px) {
            & {
                width: calc(50% - 16px);
            }
        }

        @media screen and (max-width: 520px) {
            & {
                width: 100%;
                margin: 8px 0;

                &:hover {
                    transform: none;
                }
            }
        }

        .cell-more-button {
            border: none;
            padding: 0;
            border-radius: 4px;
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background-color: rgba(16, 24, 39, 0.7);
            color: #fff;
            cursor: pointer;
            display: none;
        }
    }

    .product-cell {
        color: var(--app-content-main-color);
        margin-bottom: 8px;

        &:not(.image) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &.image span {
            line-height: 24px;
        }

        img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 16px;
        }
    }

    .cell-label {
        opacity: 0.6;
    }
}
</style> -->

<template>
    <div class="row">
        <div class="text-light col-3 row">
            <div class="col-12">
                <div class="col-12">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-13 row">
                    <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                    <div class="btn-group col-12">
                        <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                                class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                        <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                                class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                        <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                    <div class="userphoto col-2">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                    </div>
                    <div class="col-10 px-4">
                        <i>Apple</i><br>
                        <i>24550 subscribes</i>
                    </div>
                    <div class="mt-3 p-4">
                        <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-light col-3 row">
            <div class="col-12">
                <div class="col-12">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-13 row">
                    <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                    <div class="btn-group col-12">
                        <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                                class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                        <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                                class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                        <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                    <div class="userphoto col-2">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                    </div>
                    <div class="col-10 px-4">
                        <i>Apple</i><br>
                        <i>24550 subscribes</i>
                    </div>
                    <div class="mt-3 p-4">
                        <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-light col-3 row">
            <div class="col-12">
                <div class="col-12">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-13 row">
                    <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                    <div class="btn-group col-12">
                        <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                                class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                        <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                                class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                        <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                    <div class="userphoto col-2">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                    </div>
                    <div class="col-10 px-4">
                        <i>Apple</i><br>
                        <i>24550 subscribes</i>
                    </div>
                    <div class="mt-3 p-4">
                        <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-light col-3 row">
            <div class="col-12">
                <div class="col-12">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-13 row">
                    <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                    <div class="btn-group col-12">
                        <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                                class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                        <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                                class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                        <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                    <div class="userphoto col-2">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                    </div>
                    <div class="col-10 px-4">
                        <i>Apple</i><br>
                        <i>24550 subscribes</i>
                    </div>
                    <div class="mt-3 p-4">
                        <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-light col-3 row">
            <div class="col-12">
                <div class="col-12">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-13 row">
                    <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                    <div class="btn-group col-12">
                        <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                                class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                        <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                                class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                        <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                    <div class="userphoto col-2">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            alt="product">
                    </div>
                    <div class="col-10 px-4">
                        <i>Apple</i><br>
                        <i>24550 subscribes</i>
                    </div>
                    <div class="mt-3 p-4">
                        <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
img {
    width: 100%;
    height: 200px;
}

.price {
    margin-top: -50px;
    width: 98%;
    background: rgba(128, 128, 128, 0.507);
}

.thumbnail img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
    padding: 10px;
}

.userphoto img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

/* .describtion {
    display: -webkit-box;
    max-height: 60px;
    margin: 0;
    overflow-y: scroll;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
} */
</style>