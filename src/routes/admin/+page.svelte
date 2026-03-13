<script>
    let secret = '';
    let week = '';
    let postType = 'recap';
    let status = '';
    let loading = false;
    let generatedTitle = '';
    let generatedPostId = '';

    const postTypes = [
        { value: 'recap',      label: 'Weekly Recap',         weekLabel: 'Week to recap' },
        { value: 'preview',    label: 'Weekly Preview',        weekLabel: 'Week to preview' },
        { value: 'pre-draft',  label: 'Pre-Rookie Draft',      weekLabel: null },
        { value: 'post-draft', label: 'Post-Rookie Draft',     weekLabel: null },
    ];

    $: selectedType = postTypes.find(t => t.value === postType);
    $: showWeek = selectedType?.weekLabel != null;

    async function generate() {
        loading = true;
        status = '';
        generatedTitle = '';
        generatedPostId = '';

        try {
            const res = await fetch('/api/generateBlogPost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    secret,
                    postType,
                    week: showWeek && week ? parseInt(week) : undefined,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                status = `Error: ${data.message ?? res.statusText}`;
            } else {
                generatedTitle = data.title;
                generatedPostId = data.postId;
                status = 'success';
            }
        } catch (e) {
            status = `Error: ${e.message}`;
        } finally {
            loading = false;
        }
    }
</script>

<svelte:head>
    <title>Admin — Generate Blog Post</title>
</svelte:head>

<div class="admin-container">
    <h1>Generate League Post</h1>
    <p class="subtitle">Auto-generates a blog post from Sleeper data and publishes it to Contentful.</p>

    <div class="form">
        <label>
            <span>Post type</span>
            <select bind:value={postType}>
                {#each postTypes as t}
                    <option value={t.value}>{t.label}</option>
                {/each}
            </select>
        </label>

        {#if showWeek}
            <label>
                <span>{selectedType.weekLabel} <em>(leave blank for auto-detect)</em></span>
                <input type="number" bind:value={week} placeholder="e.g. 7" min="1" max="18" />
            </label>
        {/if}

        <label>
            <span>Secret key</span>
            <input type="password" bind:value={secret} placeholder="BLOG_GENERATE_SECRET" />
        </label>

        <button on:click={generate} disabled={loading || !secret}>
            {loading ? 'Generating...' : 'Generate Post'}
        </button>
    </div>

    {#if status === 'success'}
        <div class="result success">
            <p>✓ Published: <strong>{generatedTitle}</strong></p>
            <a href="/blog/{generatedPostId}" target="_blank">View post →</a>
        </div>
    {:else if status}
        <div class="result error">
            <p>{status}</p>
        </div>
    {/if}
</div>

<style>
    .admin-container {
        max-width: 520px;
        margin: 60px auto;
        padding: 0 20px;
        font-family: sans-serif;
    }

    h1 {
        font-size: 1.6rem;
        margin-bottom: 4px;
    }

    .subtitle {
        color: #666;
        margin-bottom: 32px;
        font-size: 0.9rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 0.9rem;
        font-weight: 500;
    }

    label em {
        font-weight: 400;
        color: #888;
    }

    input, select {
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 1rem;
        background: white;
    }

    button {
        padding: 12px;
        background: #1a1a2e;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .result {
        margin-top: 24px;
        padding: 16px;
        border-radius: 6px;
    }

    .result.success {
        background: #e8f5e9;
        border: 1px solid #a5d6a7;
    }

    .result.error {
        background: #ffebee;
        border: 1px solid #ef9a9a;
    }

    .result a {
        color: #1a73e8;
        font-size: 0.9rem;
    }

    .result p {
        margin: 0 0 8px;
    }
</style>
